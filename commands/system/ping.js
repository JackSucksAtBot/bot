const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const emojis = require("../../options/emojis.json");

module.exports = class EmbedCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "ping",
            group: "system",
            memberName: "ping",
            description: "Pretty quick eh? (sends a response back)",
            examples: ["ping"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription(`${emojis.ping} **I am decently quick with my responses, eh?**`)
             .setColor(0x25a1f9)
        return msg.embed(embed);
    }
};
