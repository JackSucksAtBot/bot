const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class ExplosionCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "explosion",
            group: "memes",
            memberName: "explosion",
            description: "BOOM",
            examples: ["explosion"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**\*explosions everywhere\*** :boom:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/explosion.jpg")
             .setColor(0xff3f00)
             .setFooter("From video https://youtu.be/y8ONmh_G-cQ", config.ytlogo)
        return msg.embed(embed);
    }
};
