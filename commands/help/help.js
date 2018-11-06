const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");
const secrets = require("../../options/secrets.json");
const emojis = require("../../options/emojis.json");
const colours = require("../../options/colours.json");

module.exports = class MenuHelpCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "help",
            group: "help",
            aliases: ["cmds", "commands"],
            memberName: "help",
            description: "The main menu help command",
            examples: ["help"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .addField("🏠️ Help: Menu","All commands use the prefix `jb!`\nIf there are any issues please join the support server [https://discord.gg/jTY4qtF](https://discord.gg/jTY4qtF)\nﾠ ﾠ\n**===============================**\nﾠ ﾠ")
             .addField("🌐 Command Documentation","You can view the full list of commands with a little description [here](https://cairo2k18.xyz/jackbot/commands.html).\nﾠ ﾠ")
             .addField("⚙️ System Commands", "For a full list of system commands type `jb!system` or on the website listed above.\nﾠ ﾠ")
             .addField("📸️ Memey Commands", "For a full list of memey commands type `jb!memes` or on the website listed above.\nﾠ ﾠ")
             .addField("📹 Video Meme Commands","For a full list of video meme commands type `jb!videomemes` or on the website listed above.\nﾠ ﾠ")
             .addField("🔧 Utility Commands","For a full list of video meme commands type `jb!utilities` or on the website listed above.\nﾠ ﾠ")
             .addField("⚖ Legal Commands", "For a full list of legal commands type `jb!legal` or on the website listed above.\nﾠ ﾠ")
             .addField("💿️ Ate Commands", "For a full list of ATE commands type `jb!ate` or on the website listed above.")
             .setColor(msg.guild.me.displayColor)
             .setFooter("JackBot | Developed by Cairo#4883", config.botownerpicture);

        const embed2 = new Discord.RichEmbed()
             .addField("🏠️ Help: Menu","All commands use the prefix `jb!`\nIf there are any issues please join the support server [https://discord.gg/jTY4qtF](https://discord.gg/jTY4qtF)\nﾠ ﾠ\n**===============================**\nﾠ ﾠ")
             .addField("🌐 Command Documentation","You can view the full list of commands with a little description [here](https://cairo2k18.xyz/jackbot/commands/).\nﾠ ﾠ")
             .addField("⚙️ System Commands", "For a full list of system commands type `jb!system` or on the website listed above.\nﾠ ﾠ")
             .addField("📸️ Memey Commands", "For a full list of memey commands type `jb!memes` or on the website listed above.\nﾠ ﾠ")
             .addField("📹 Video Meme Commands","For a full list of video meme commands type `jb!videomemes` or on the website listed above.\nﾠ ﾠ")
             .addField("🔧 Utility Commands","For a full list of video meme commands type `jb!utilities` or on the website listed above.\nﾠ ﾠ")
             .addField("⚖ Legal Commands", "For a full list of legal commands type `jb!legal` or on the website listed above.\nﾠ ﾠ")
             .setColor(msg.guild.me.displayColor)
             .setFooter("JackBot | Developed by Cairo#4883", config.botownerpicture);

        if (msg.author.id == config.botownerid) {
            return msg.embed(embed);
        } else {
            return msg.embed(embed2)
        }
    }
};