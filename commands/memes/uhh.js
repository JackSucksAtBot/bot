const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class UhhCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "uhh",
            group: "memes",
            memberName: "uhh",
            description: "Woops..",
            examples: ["uhh"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Jack, you done f●●●ed up this time** :face_palm:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/uhh.png")
             .setColor(0xfffffa)
             .setFooter("From video https://youtu.be/lV7S4unkJNs", config.ytlogo)
        return msg.embed(embed);
    }
};
