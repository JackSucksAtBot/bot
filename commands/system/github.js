const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class EmbedCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "github",
            group: "system",
            memberName: "github",
            description: "Gives the link to the official github.",
            examples: ["github"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription(":octopus: **I'm open source!** - View jackbot on github [here](https://github.com/jacksucksatbot).")
             .setColor(0x9654f9)
        return msg.embed(embed);
    }
};