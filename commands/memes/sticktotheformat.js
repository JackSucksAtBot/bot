const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class StickToTheFormatCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "sticktotheformat",
            group: "memes",
            memberName: "sticktotheformat",
            description: "insert clap here",
            examples: ["sticktotheformat"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Stick :clap: To :clap: The :clap: Format :clap:**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/sticktotheformat.gif")
             .setColor(0xfff200)
        return msg.embed(embed);
    }
};
