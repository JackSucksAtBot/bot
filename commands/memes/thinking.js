const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class ThinkingCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "thinking",
            group: "memes",
            memberName: "thinking",
            description: "Hmmm",
            examples: ["thinking"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**\*Thinking intensifies\*** :thinking:")
             .setColor(0x635c5c)
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/thinking.png")
             .setFooter("From video https://youtu.be/mvCK7f2xk0Q", config.ytlogo)
        return msg.embed(embed);
    }
};
