const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class CrotchCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "cleaver",
            group: "memes",
            memberName: "cleaver",
            description: "It's normal to have a cleaver in your clothes, right?",
            examples: ["cleaver"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**My trusty cleaver! :knife:**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/cleaver.png")
             .setColor(0xc6baba)
        return msg.embed(embed);
    }
};
