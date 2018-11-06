const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class DuetCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "duet",
            group: "memes",
            memberName: "duet",
            description: "oooowoahah",
            examples: ["duet"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Dun dun bum dan dun run fun** :violin: :microphone:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/duet.jpg")
             .setColor(0xffeec9)
             .setFooter("From video https://youtu.be/POX_wH8nM5o", config.ytlogo)
        return msg.embed(embed);
    }
};
