const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class MonsterCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "monster",
            group: "memes",
            memberName: "monster",
            description: "IM A MONSTER!",
            examples: ["monster"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**On the outside I am usually normal..** :smiling_imp:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/monster.png")
             .setColor(0x9654f9)
             .setFooter("From video https://youtu.be/POX_wH8nM5o", config.ytlogo)
        return msg.embed(embed);
    }
};
