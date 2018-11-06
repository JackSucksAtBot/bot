const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class KazooHolderCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "kazooholder",
            group: "memes",
            memberName: "kazooholder",
            description: "It has a built in kazoo holder!?",
            examples: ["kazooholder"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**This headset even has a built in kazoo holder** :open_mouth:")
             .setColor(0x44c44f)
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/kazooholder.png")
             .setFooter("From video https://youtu.be/8SzMcGsyzoM", config.ytlogo)
        return msg.embed(embed);
    }
};
