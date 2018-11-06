const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class SwirlCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "swirl",
            group: "memes",
            memberName: "swirl",
            description: "sWirLY",
            examples: ["swirl"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**The sWirL meme is DEAD! STOP!**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/swirl.jpg")
             .setColor(0xffd989)
             .setFooter("From video https://youtu.be/-BSiPJujYIY", config.ytlogo)
        return msg.embed(embed);
    }
};
