const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class IdiotCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "idiot",
            group: "memes",
            memberName: "idiot",
            description: "*insert facepalm here*",
            examples: ["idiot"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**HeLP! My bRaIN is being cRuSHeD!!! <:brain:462848215662854167>**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/idiot.png")
             .setColor(0xff8eac)
             .setFooter("From video https://youtu.be/4kgTRbJY9zk", config.ytlogo)
        return msg.embed(embed);
    }
};
