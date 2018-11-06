const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const emojis = require("../../options/emojis.json");

module.exports = class EmbedCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "updatelogs",
            aliases: ["updatelog"],
            group: "system",
            memberName: "updatelogs",
            description: "Sends you the link to the official updatelogs.",
            examples: ["updatelogs"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription(`${emojis.updates} **You want to view the updatelogs you say?** - Click [here](https://cairo2k18.xyz/jackbot/updatelogs.html).`)
             .setColor(0x3bcc58)
        return msg.embed(embed);
    }
};