const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class KazooDropCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "kazoodrop",
            group: "memes",
            memberName: "kazoodrop",
            description: "His behaviour was disgusting",
            examples: ["kazoodrop"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription(":angry: **You absolute SCUM!**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/kazoodrop.png")
             .setColor(0xedb50e)
        return msg.embed(embed);
    }
};
