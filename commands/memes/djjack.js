const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class DJJackCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "djjack",
            group: "memes",
            memberName: "djjack",
            description: "Yes bois dj jack in tha houseee",
            examples: ["djjack"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Party in the house tonight bois :rotating_light:**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/djjack.png")
             .setColor(0x9966cc)
             .setFooter("From video https://youtu.be/47g1QymvTJ0", config.ytlogo)
        return msg.embed(embed);
    }
};
