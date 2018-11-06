const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class SuitedCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "suited",
            group: "memes",
            memberName: "suited",
            description: "Brother and sister moment, beautiful",
            examples: ["suited"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**We really both are brother and sister.. I mean.. f●●●** :joy:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/suited.png")
             .setColor(0xffcc00)
             .setFooter("From video https://youtu.be/snhzjJmp0E0", config.ytlogo)
        return msg.embed(embed);
    }
};
