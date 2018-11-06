const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class MurdererCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "murderer",
            group: "memes",
            memberName: "murderer",
            description: "DIE YOU WORTHLESS ****",
            examples: ["murderer"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Hahahaha - I love killing innocent people and things :dizzy_face:**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/murderer.png")
             .setColor(0xf9f9c2)
        return msg.embed(embed);
    }
};
