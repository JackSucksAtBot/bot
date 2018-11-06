const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class ImmatureCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "immature",
            group: "memes",
            memberName: "immature",
            description: "Just me being immature as usual",
            examples: ["immature"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**LOL I MADE AN ASS! :joy:**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/immature2.png")
             .setColor(0xff3ab3)
        return msg.embed(embed);
    }
};
