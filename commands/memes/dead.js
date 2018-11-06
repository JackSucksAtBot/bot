const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class DeadCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "dead",
            group: "memes",
            memberName: "dead",
            description: "The baby wipes flavour from the beanboozled challenge is disgusting.",
            examples: ["dead"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Jack suffering from baby wipes :baby:**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/dead.png")
             .setColor(0xc90000)
        return msg.embed(embed);
    }
};
