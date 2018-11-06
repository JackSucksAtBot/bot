const JackBotHandler = require("jackbot-commando");

const escapeRegex = require("escape-string-regexp");
const discord = require("discord.js"); 
const tags = require("common-tags");
const util = require("util");

const nl = "!!NL!!";
const Discord = discord;
const nlPattern = new RegExp(nl, "g");

const config = require("../../options/config.json");
const colours = require("../../options/colours.json");
const emojis = require("../../options/emojis.json");
const webhook = require("../../options/webhook.json");
const logs = new Discord.WebhookClient(webhook.logid, webhook.logtoken);

module.exports = class EvalCommand extends JackBotHandler.Command {
	constructor(client) {
		super(client, {
			name: "eval",
			group: "ate",
			memberName: "eval",
			description: "Executes JavaScript code.",
			args: [
				{
					key: "script",
					prompt: "Please input the code you would like to evaluate",
					type: "string"
				}
			]
		});

		this.lastResult = null;
    }

    hasPermission(msg) {
	
        const insuffPerms = new Discord.RichEmbed()
        .setDescription(`${emojis.no} **Insufficient Permission(s)** - You must be a BotOwner to use this command.`)
		.setColor(colours.error);
		
		if (msg.author.id != config.botownerid) return msg.embed(insuffPerms), false;
		return true;
    }

	run(msg, { script }) { 
        
        const evalErrorSensitive = new Discord.RichEmbed()
        .setDescription(`${emojis.no} **Error** - An error occured whilst evaluating.\n\`\`\`The code you are trying to evaluate is sensitive, therefore you are not allowed to evaluate it.\`\`\``)
        .setColor(colours.error);

        if(script == "client.token") return msg.embed(evalErrorSensitive);
        if(script == "secrets") return msg.embed(evalErrorSensitive);
        if(script == "secrets.token") return msg.embed(evalErrorSensitive);

		const message = msg;
		const client = msg.client;
		const objects = client.registry.evalObjects;
		const lastResult = this.lastResult;
		const doReply = val => {
			if(val instanceof Error) {
				msg.reply(`Callback error: \`${val}\``);
			} else {
				const result = this.makeResultMessages(val, process.hrtime(this.hrStart));
				if(Array.isArray(result)) {
					for(const item of result) {
						if(this.client.options.selfbot) msg.say(item); else msg.reply(item);
					}
				} else if(this.client.options.selfbot) {
					msg.say(result);
				} else {
					msg.reply(result);
				}
			}
        };
        
		let hrDiff;
		try {
			const hrStart = process.hrtime();
			this.lastResult = eval(script);
			hrDiff = process.hrtime(hrStart);
		} catch(err) {
            const evalError = new Discord.RichEmbed()
            .setDescription(`${emojis.no} **Error** - An error occured whilst evaluating.\n\`\`\`${err}\`\`\``)
            .setColor(colours.error);
			return msg.embed(evalError);
		}

        
		this.hrStart = process.hrtime();
		let response = this.makeResultMessages(this.lastResult, hrDiff, script, msg.editable);
		if(msg.editable) {
			if(response instanceof Array) {
				if(response.length > 0) response = response.slice(1, response.length - 1);
				for(const re of response) msg.say(re);
				return null;
			} else {
				const responseembed = new Discord.RichEmbed()
				.setDescription(`${emojis.yes} **Success** - Evaluted the code you inputted successfully.\n\n${response}`)
				.setColor(colours.success);
				msg.edit(responseembed);

				const telemetryEVALlog = new Discord.RichEmbed()
			.setAuthor("Code Evaluation Event")
			.setDescription(`**Eval Invoker:** ${msg.author.username}#${msg.author.discriminator} (${msg.author.id})\n**Code Inputted:** \`\`\`js\n${script}\`\`\`\n**Code Outputted:** \n\n${response}`)
			.setColor(colours.logeval)
			.setThumbnail(webhook.logeval)
			.setTimestamp();
			logs.send(telemetryEVALlog);

			return;
			}
		} else {
			const responseembed = new Discord.RichEmbed()
			.setDescription(`${emojis.yes} **Success** - Evaluted the code you inputted successfully.\n\n${response}`)
			.setColor(colours.success);

			msg.embed(responseembed);

			const telemetryEVALlog = new Discord.RichEmbed()
			.setAuthor("Code Evaluation Event")
			.setDescription(`**Eval Invoker:** ${msg.author.username}#${msg.author.discriminator} (${msg.author.id})\n**Code Inputted:** \`\`\`js\n${script}\`\`\`\n**Code Outputted:** \n\n${response}`)
			.setColor(colours.logeval)
			.setThumbnail(webhook.logeval)
			.setTimestamp();
			logs.send(telemetryEVALlog);

			return; 
		}
	}

	makeResultMessages(result, hrDiff, input = null, editable = false) {
		const inspected = util.inspect(result, { depth: 0 })
			.replace(nlPattern, "\n")
			.replace(this.sensitivePattern, "");
		const split = inspected.split("\n");
		const last = inspected.length - 1;
		const prependPart = inspected[0] !== "{" && inspected[0] !== "[" && inspected[0] !== '' ? split[0] : inspected[0];
		const appendPart = inspected[last] !== "}" && inspected[last] !== "]" && inspected[last] !== '' ?
			split[split.length - 1] :
			inspected[last];
		const prepend = `\`\`\`javascript\n${prependPart}\n`;
		const append = `\n${appendPart}\n\`\`\``;
		if(input) {
			return discord.splitMessage(tags.stripIndents`
				${editable ? `
					*Input*
					\`\`\`javascript
					${input}
					\`\`\`` :
				""}
				*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ""}${hrDiff[1] / 1000000}ms.*
				\`\`\`javascript
				${inspected}
				\`\`\`
			`, 1900, "\n", prepend, append);
		} else {
			return discord.splitMessage(tags.stripIndents`
				*Callback executed after ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ""}${hrDiff[1] / 1000000}ms.*
				\`\`\`javascript
				${inspected}
				\`\`\`
			`, 1900, "\n", prepend, append);
		}
	}

	get sensitivePattern() {
		if(!this._sensitivePattern) {
			const client = this.client;
			let pattern = "";
            if(client.token) pattern += escapeRegex(client.token);
			Object.defineProperty(this, "_sensitivePattern", { value: new RegExp(pattern, "gi") });
		}
		return this._sensitivePattern;
	}
};
