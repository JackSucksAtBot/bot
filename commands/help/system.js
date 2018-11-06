const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class SystemHelpCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "system",
            group: "help",
            memberName: "system",
            description: "The menu for the system commands in the help section.",
            examples: ["system"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .addField("⚙️ Help: System","All commands use the prefix `jb!`\nIf there are any issues please join the support server [https://discord.gg/jTY4qtF](https://discord.gg/jTY4qtF)\nﾠ ﾠ")
             .addField("💬 Commands (15)","**|** `info` **|** `about` **|** `links` **|** `support` **|** `website` **|** `invite` **|**\n**|** `updatelogs` **|** `version` **|** `ping` **|** `bugs` **|** `github` **|** `trello` **|**\n**|** `donate` **|** `partner` **|** `prefix` **|**")
             .setColor(msg.guild.me.displayColor)
             .setFooter("JackBot | Developed by Cairo#4883", config.botownerpicture)
        return msg.embed(embed);
    }
};