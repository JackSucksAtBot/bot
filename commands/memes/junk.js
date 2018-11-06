const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class JunkCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "junk",
            group: "memes",
            memberName: "junk",
            description: "I really like the tesco clubcard collection you got there",
            examples: ["junk"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Stop sending me junk mail... please** :newspaper2:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/junk.jpg")
             .setColor(0x0800ff)
        return msg.embed(embed);
    }
};
