const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class WtfCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "wtf",
            group: "memes",
            memberName: "wtf",
            description: "Let me reconsider some life choices",
            examples: ["wtf"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Who am I dating...** :face_palm:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/wtf.png")
             .setColor(0x2a8bd6)
             .setFooter("From video https://youtu.be/snhzjJmp0E0", config.ytlogo)
        return msg.embed(embed);
    }
};
