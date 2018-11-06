const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class RetardCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "retard",
            group: "memes",
            memberName: "retard",
            description: "I had a massive brain fart here",
            examples: ["retard"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Hey ima retard, I didn't know this would happen :astonished:**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/retard.png")
             .setColor(0x0f51bc)
        return msg.embed(embed);
    }
};
