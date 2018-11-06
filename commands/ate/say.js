const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");
const colours = require("../../options/colours.json");
const emojis = require("../../options/emojis.json");
const webhook = require("../../options/webhook.json");
const logs = new Discord.WebhookClient(webhook.logid, webhook.logtoken);

module.exports = class SayCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "say",
            group: "ate",
            memberName: "say",
            description: "Allows you to make the bot send a message",
            examples: ["say <text>"],
            guildOnly: true,
            args: [
                {
                    key: "text",
                    prompt: "Please input some text for me to say",
                    type: "string"
                }
            ]
        });
    }
    
    hasPermission(msg) {
	
        const insuffPerms = new Discord.RichEmbed()
        .setDescription(`${emojis.no} **Insufficient Permission(s)** - You must be a BotOwner to use this command.`)
		.setColor(colours.error);
		
		if (msg.author.id != config.botownerid) return msg.embed(insuffPerms), false;
		return true;
    }

    run(msg, { text }) {
        msg.say(text);

        const telemetrySAYlog = new Discord.RichEmbed()
		.setAuthor("Client Say Event")
		.setDescription(`**Say Invoker:** ${msg.author.username}#${msg.author.discriminator} (${msg.author.id})\n**Message Said:** \`\`\`${text}\`\`\``)
		.setColor(colours.logsay)
		.setThumbnail(webhook.logsay)
		.setTimestamp();
        logs.send(telemetrySAYlog);
        
        return;
    }
};