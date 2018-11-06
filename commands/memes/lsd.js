const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class LSDCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "lsd",
            group: "memes",
            memberName: "lsd",
            description: "Hacking on hypixel at it's finest",
            examples: ["lsd"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Wewww luk a butterfly :pills:**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/lsd.png")
             .setColor(0xff69b4)
             .setFooter("From video https://youtu.be/Sy23y8HZO48", config.ytlogo)
        return msg.embed(embed);
    }
};
