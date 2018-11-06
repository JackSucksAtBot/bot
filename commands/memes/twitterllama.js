const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class TwitterLlamaCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "twitterllama",
            group: "memes",
            memberName: "twitterllama",
            description: "It's official, the grave.",
            examples: ["twitterllama"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**I will rememberrr youuuu** :notes:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/twitterllama.png")
             .setColor(0x969696)
             .setFooter("By u/xXMLG_R3dd1t3rXx", config.rlogo)
        return msg.embed(embed);
    }
};
