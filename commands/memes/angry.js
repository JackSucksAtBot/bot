const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class AngryCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "angry",
            group: "memes",
            memberName: "angry",
            description: "B!tch f●●● off",
            examples: ["angry"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**B!tch get the f●●● outta here** :rage:")
             .setColor(0xfc3916)
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/angry.png")
             .setFooter("From video https://youtu.be/8SzMcGsyzoM", config.ytlogo)
        return msg.embed(embed);
    }
};
