const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class GtfoCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "gtfo",
            group: "memes",
            memberName: "gtfo",
            description: "I said GET OUT!",
            examples: ["gtfo"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Get the f●●● out**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/gtfo.png")
             .setColor(0x3c598c)
        return msg.embed(embed);
    }
};
