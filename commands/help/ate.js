const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class ATEHelpCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "ate",
            group: "help",
            memberName: "ate",
            description: "The menu for the ATE commands in the help section.",
            examples: ["ate"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .addField("💿️ Help: Ate","All commands use the prefix `jb!`\nIf there are any issues please join the support server [https://discord.gg/jTY4qtF](https://discord.gg/jTY4qtF)\nﾠ ﾠ")
             .addField("📝 Note","**__These commands are for the BotOwner(s) only!__**\nﾠ ﾠ")
             .addField("💬 Commands (4)"," **|** `eval` **|** `reload` **|**\n**|** `restart` **|** `stop` **|**")
             .setColor(msg.guild.me.displayColor)
             .setFooter("JackBot | Developed by Cairo#4883", config.botownerpicture)
        return msg.embed(embed);
    }
};