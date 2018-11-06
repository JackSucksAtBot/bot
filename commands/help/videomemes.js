const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class VideoMemeHelpCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "videomemes",
            group: "help",
            memberName: "videomemes",
            description: "The menu for the video meme commands in the help section.",
            examples: ["videomemes"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .addField("📹️ Help: Video Memes","All commands use the prefix `jb!`\nIf there are any issues please join the support server [https://discord.gg/jTY4qtF](https://discord.gg/jTY4qtF)\nﾠ ﾠ")
             .addField("📝 Note",`**You must have either donated [here](https://donatebot.io/checkout/437423842244165633) or have voted for the bot on [here](https://discordbots.org/bot/${config.botid}/vote) to use the commands.**\nﾠ ﾠ`)
             .addField("💬 Commands (2)","**|** `spin` **|** `scumbag` **|**")
             .setColor(msg.guild.me.displayColor)
             .setFooter("JackBot | Developed by Cairo#4883", config.botownerpicture)
        return msg.embed(embed);
    }
};