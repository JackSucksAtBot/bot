const { stripIndents, oneLine } = require("common-tags");
const JackBotHandler = require("jackbot-commando");
const discord = require("discord.js");

const config = require("../../options/config.json");
const colours = require("../../options/colours.json");
const emojis = require("../../options/emojis.json");

const Discord = discord;

var badwords = ["fuck", "whore", "shit", "cunt", "dick", "pussy", "slut", "fag", "nonce", "nig", "kys", "kms"];

module.exports = class PrefixCommand extends JackBotHandler.Command {
	constructor(client) {
		super(client, {
			name: "prefix",
			group: "system",
			memberName: "prefix",
			description: "Allows you to set the bot's prefix for the current server.",
			examples: ["prefix <string>"],
			guildOnly: true,
			args: [
				{
					key: "changprfx",
					prompt: "What do you want to set the bot's prefix to?",
					type: "string"
				}
			]
		});
    }
    
    hasPermission(msg) {

        const insuffPerm = new Discord.RichEmbed()
        .setDescription(`${emojis.no} **Insufficient Permission(s)** - You must have the \`MANAGE_GUILD\` permission to use this command.`)
        .setColor(colours.error);
        
        if(!msg.member.hasPermission("MANAGE_GUILD") && !this.client.isOwner(msg.author)) return msg.embed(insuffPerm), false;
        return true;
    }

	async run(msg, { changprfx }) {
        const ovrsuffLength = new Discord.RichEmbed()
        .setDescription(`${emojis.no} **Error** - The prefix must be below 5 characters.`)
        .setColor(colours.error);

		if(changprfx.length > 5) return msg.embed(ovrsuffLength);

		const innapPrfx = new Discord.RichEmbed()
		.setDescription(`${emojis.no} **Error** - You may not set the bot's prefix to an innapropriate word.`)
		.setColor(colours.error); 
		
		if(badwords.indexOf(changprfx) > -1) return msg.embed(innapPrfx);
		
        const lowercase = changprfx.toLowerCase();
        const prefix = lowercase == "none" ? '' : changprfx;
		let response;
		if(lowercase === "default") {
            if(msg.guild) msg.guild.commandPrefix = null; else this.client.commandPrefix = null;
            const current = this.client.commandPrefix ? `\`${this.client.commandPrefix}\`` : "no prefix";
            response = `Reset the command prefix to \`${current}\``;
		} else {
			if(msg.guild) msg.guild.commandPrefix = prefix; else this.client.commandPrefix = prefix;
			response = prefix ? `Set the command prefix to \`${prefix}\`` : "Removed the command prefix.";
		}
        
        const embed = new Discord.RichEmbed()
        .setDescription(`${emojis.yes} **Sucesss** - ${response}`)
        .setColor(colours.success);

		await msg.embed(embed);
		return null;
	}
};
