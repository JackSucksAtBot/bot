const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class AlienCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "alien",
            group: "memes",
            memberName: "alien",
            description: "I have come to invade planet earth",
            examples: ["alien"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**I have come to invade the earth and kill all humans** :alien:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/alien.png")
             .setFooter("From video https://youtu.be/lV7S4unkJNs", config.ytlogo)
             .setColor(0xffeca8)
        return msg.embed(embed);
    }
};
