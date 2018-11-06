const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");
const pm2 = require("pm2");

const config = require("../../options/config.json");
const colours = require("../../options/colours.json");
const emojis = require("../../options/emojis.json");
const webhook = require("../../options/webhook.json");
const logs = new Discord.WebhookClient(webhook.logid, webhook.logtoken);

module.exports = class StopCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "stop",
            group: "ate",
            memberName: "stop",
            description: "Stops the bot",
            examples: ["stop"],
            guildOnly: false,
            args: [
                {
                    key: "reason",
                    prompt: "Please input a reason for stopping the bot",
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
             .setDescription(`${emojis.yes} **Success** - JackBot is shutting down now.`)
             .setColor(colours.success)
        msg.embed(embed);

        this.client.user.setActivity("Stopping..", { type: "PLAYING" }); 
        this.client.user.setStatus("dnd");

        const telemetrySTOPlog = new Discord.RichEmbed()
		.setAuthor("Client Stop Event")
		.setDescription(`**Stop Invoker:** ${msg.author.username}#${msg.author.discriminator} (${msg.author.id})\n**Stop Reason:** \`\`\`${reason}\`\`\``)
		.setColor(colours.logstop)
		.setThumbnail(webhook.logstop)
		.setTimestamp();
        logs.send(telemetrySTOPlog);

        return pm2.stop("index", function() {});
    }
};