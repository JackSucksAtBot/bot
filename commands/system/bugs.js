const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const emojis = require("../../options/emojis.json");

module.exports = class EmbedCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "bugs",
            aliases: ["bug"],
            group: "system",
            memberName: "bugs",
            description: "Gives the link to report a bug.",
            examples: ["bug"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription(`${emojis.bug} **A bug you say?** - Please report all bugs [here](https://github.com/JackSucksAtBot/bot/issues).`)
             .setColor(0x3bcc58)
        return msg.embed(embed);
    }
};