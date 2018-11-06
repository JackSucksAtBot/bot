const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class EmbedCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "trello",
            group: "system",
            memberName: "trello",
            description: "Gives the link to the official trello.",
            examples: ["trello"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription(":bulb: **Progress, Bugs, Ideas?** - You can view jackbot's trello [here](https://trello.com/b/vK3U4Qfy).")
             .setColor(0xf4d716)
        return msg.embed(embed);
    }
};