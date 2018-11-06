const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class UtilityHelpCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "utilities",
            group: "help",
            memberName: "utilities",
            description: "The menu for the utility commands in the help section.",
            examples: ["utilities"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .addField("🔧️ Help: Utilities","All commands use the prefix `jb!`\nIf there are any issues please join the support server [https://discord.gg/jTY4qtF](https://discord.gg/jTY4qtF)\nﾠ ﾠ")
             .addField("💬 Commands (4)","**|** `weather` **|** `urban` **|**  **|** `giphy` **|**  **|** `search` **|** ")
             .setColor(msg.guild.me.displayColor)
             .setFooter("JackBot | Developed by Cairo#4883", config.botownerpicture)
        return msg.embed(embed);
    }
};