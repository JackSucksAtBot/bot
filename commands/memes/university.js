const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class UniversityCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "university",
            aliases: ["uni"],
            group: "memes",
            memberName: "university",
            description: "Who cares about university, my parents won't care..",
            examples: ["university"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**When your parents find out you dropped out of university to play minecraft :rage:**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/university.jpg")
             .setColor(0xab1313)
             .setFooter("From u/DrBung", config.rlogo)
        return msg.embed(embed);
    }
};
