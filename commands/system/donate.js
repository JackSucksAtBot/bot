const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class EmbedCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "donate",
            aliases: ["donatebot", "patreon", "paypal"],
            group: "system",
            memberName: "donate",
            description: "Gives the link to the official donation page.",
            examples: ["donate"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription(":heart: **Help support jackbot** - You can donate [here](https://donatebot.io/checkout/437423842244165633).")
             .setColor(0xb21313)
        return msg.embed(embed);
    }
};