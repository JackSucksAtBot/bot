const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class KazooCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "kazoo",
            group: "memes",
            memberName: "kazoo",
            description: "the kazoo possesses you",
            examples: ["kazoo"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**the kazoo possesses you.. :ghost:**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/kazoo.png")
             .setColor(0xfffa00)
             .setFooter("From video https://youtu.be/y8ONmh_G-cQ", config.ytlogo)
        return msg.embed(embed);
    }
};
