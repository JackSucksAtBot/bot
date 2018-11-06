const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class FlaminCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "flamin",
            group: "memes",
            memberName: "flamin",
            description: "Damn it's hot",
            examples: ["flamin"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**It's a little hot in here** :fire:")
             .setColor(0xfcaf0a)
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/flamin.jpg")
             .setFooter("From video https://youtu.be/mvCK7f2xk0Q", config.ytlogo)
        return msg.embed(embed);
    }
};
