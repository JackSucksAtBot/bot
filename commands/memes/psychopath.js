const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class PsychopathCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "psychopath",
            group: "memes",
            memberName: "psychopath",
            description: "Hehehehehe",
            examples: ["psychopath"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Hehehehehe.. keep one eye open tonight kids ;)** :knife:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/psychopath.png")
             .setFooter("From video https://youtu.be/lV7S4unkJNs", config.ytlogo)
             .setColor(0xff2323)
        return msg.embed(embed);
    }
};
