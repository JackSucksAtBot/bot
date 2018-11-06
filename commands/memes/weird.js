const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class WeirdCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "weird",
            group: "memes",
            memberName: "weird",
            description: "Just being a bit weird as ususal",
            examples: ["weird"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**It's ok, just your average jacksucksatlife being weird** :no_mouth:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/weird.png")
             .setFooter("From video https://youtu.be/lV7S4unkJNs", config.ytlogo)
             .setColor(0x7f68ff)
        return msg.embed(embed);
    }
};
