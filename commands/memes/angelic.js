const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class AngelicCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "angelic",
            group: "memes",
            memberName: "angelic",
            description: "Hallelujah!",
            examples: ["angelic"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**This headset... was created by angels..** :angel:")
             .setColor(0xfcfcfc)
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/angelic.png")
             .setFooter("From video https://youtu.be/8SzMcGsyzoM", config.ytlogo)
        return msg.embed(embed);
    }
};
