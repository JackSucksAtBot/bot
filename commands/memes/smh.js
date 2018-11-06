const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class SMHCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "smh",
            group: "memes",
            memberName: "smh",
            description: "Jesus christ...",
            examples: ["smh"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription(":face_palm: **Shaking my head indeed...**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/smh.jpg")
             .setColor(0xf7b8a5)
        return msg.embed(embed);
    }
};
