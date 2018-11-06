const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class ExcitedCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "excited",
            group: "memes",
            memberName: "excited",
            description: "OMG! OMG! I'm so excited!!",
            examples: ["excited"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**10,000 SUBSCRIBERS! cringy music plays\n....You saw nothing :neutral_face:**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/excited.gif")
             .setColor(0xfffbaf)
        return msg.embed(embed);
    }
};
