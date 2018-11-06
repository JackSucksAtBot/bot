const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class NoseCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "nose",
            group: "memes",
            memberName: "nose",
            description: "My nose on a [spoiler]",
            examples: ["nose"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**My nose is on a fence post!** :joy:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/nose.jpg")
             .setColor(0xffe0e0)
             .setFooter("From video https://youtu.be/99N69wwBXK0", config.ytlogo)
        return msg.embed(embed);
    }
};