const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class GagCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "gag",
            aliases: ["vomit"],
            group: "memes",
            memberName: "gag",
            description: "The beanboozled flavour vomit is great!",
            examples: ["gag"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Vomit is the best flavour :nauseated_face:**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/gag.png")
             .setColor(0xdd3e3e)
        return msg.embed(embed);
    }
};
