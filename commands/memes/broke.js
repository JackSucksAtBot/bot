const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class BrokeCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "broke",
            group: "memes",
            memberName: "broke",
            description: "I'm soo poor ;-;",
            examples: ["broke"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**I mean it's a bit out of my budget..** :pound:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/broke.png")
             .setColor(0xffdddd)
             .setFooter("From video https://youtu.be/POX_wH8nM5o", config.ytlogo)
        return msg.embed(embed);
    }
};
