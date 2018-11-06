const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class PaidPromotionCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "paidpromotion",
            group: "memes",
            memberName: "paidpromotion",
            description: "oh no.. not jack too",
            examples: ["paidpromotion"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**__Includes paid promotion__ NOOOOO!** :dollar:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/paidpromotion.png")
             .setColor(0x5cd330)
             .setFooter("From video https://youtu.be/ViA1s0_FJPc", config.ytlogo)
        return msg.embed(embed);
    }
};