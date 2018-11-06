const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class BloodyhellCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "bloodyhell",
            group: "memes",
            memberName: "bloodyhell",
            description: "Oh bloody hell",
            examples: ["bloodyhell"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Oh bloody hell..** :loud_sound:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/bloodyhell.jpg")
             .setColor(0xb7a8a8)
             .setFooter("From video https://youtu.be/99N69wwBXK0", config.ytlogo)
        return msg.embed(embed);
    }
};