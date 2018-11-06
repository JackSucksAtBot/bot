const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class PleaseCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "please",
            group: "memes",
            memberName: "please",
            description: "Get some help",
            examples: ["please"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Becky.. please.. get some help** :hospital:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/please.png")
             .setColor(0xff0037)
             .setFooter("From video https://youtu.be/snhzjJmp0E0", config.ytlogo)
        return msg.embed(embed);
    }
};
