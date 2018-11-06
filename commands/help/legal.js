const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class LegalHelpCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "legal",
            group: "help",
            memberName: "legal",
            description: "The menu for the legal commands in the help section.",
            examples: ["legal"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .addField("⚖ Help: legal","All commands use the prefix `jb!`\nIf there are any issues please join the support server [https://discord.gg/jTY4qtF](https://discord.gg/jTY4qtF)\nﾠ ﾠ")
             .addField("📝 Note",`**Please note jackbot is governed under these terms of service and this privacy policy, if you do not wish to comply please discontinue use of the bot immediately and kick it from all servers you own.**\nﾠ ﾠ`)
             .addField("💬 Commands (2)","**|** `terms` **|** `privacy` **|**")
             .setColor(msg.guild.me.displayColor)
             .setFooter("JackBot | Developed by Cairo#4883", config.botownerpicture)
        return msg.embed(embed);
    }
};