const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");
const pm2 = require("pm2");

const config = require("../../options/config.json");
const colours = require("../../options/colours.json");
const emojis = require("../../options/emojis.json");
const webhook = require("../../options/webhook.json");
const log = new Discord.WebhookClient(webhook.errid, webhook.errtoken);

module.exports = class RestartCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "restart",
            group: "ate",
            memberName: "restart",
            description: "Restarts the bot",
            examples: ["restart"],
            guildOnly: false,
            args: [
                {
                    key: "reason",
                    prompt: "Please input a reason for restarting the bot",
                    type: "string"
                }
            ]
        });
    }

    hasPermission(msg) {
        const insuffPerms = new Discord.RichEmbed()
             .setDescription(`${emojis.no} **Insufficient Permission(s)** - You must be a BotOwner to use this command.`)
             .setColor(colours.error);

        if(!this.client.isOwner(msg.author)) return msg.embed(insuffPerms), false;
        return true;
    }

    run(msg, { reason }) {

        const embed = new Discord.RichEmbed()
             .setDescription(`${emojis.yes} **Success** - JackBot is being restarted now.`)
             .setColor(colours.success)
        msg.embed(embed);

        this.client.user.setActivity("Restarting..", { type: "PLAYING" }); 
        this.client.user.setStatus("idle");
             
        const telemetryRESTARTlog = new Discord.RichEmbed()
		.setAuthor("Client Restart Event")
		.setDescription(`**Restart Invoker:** ${msg.author.username}#${msg.author.discriminator} (${msg.author.id})\n**Restart Reason:** \`\`\`${reason}\`\`\``)
		.setColor(colours.logrestart)
		.setThumbnail(webhook.logrestart)
		.setTimestamp();
        logs.send(telemetryRESTARTlog);
        return pm2.restart("index", function() {});
    }
};