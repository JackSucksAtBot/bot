const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class ShockedCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "shocked",
            group: "memes",
            memberName: "shocked",
            description: "OML!!!",
            examples: ["shocked"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Nooooooooooooooooo!** :broken_heart: :sob:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/shocked.png")
             .setFooter("From video https://youtu.be/lV7S4unkJNs", config.ytlogo)
        return msg.embed(embed);
    }
};
