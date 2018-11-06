const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class EmbedCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "links",
            aliases: ["website", "support", "invite"],
            group: "system",
            memberName: "links",
            description: "Sends official jackbot links",
            examples: ["links"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .addField("🌐 Website", "The bot's website contains the command list, bug report section, a basic overview of the bot and the updatelogs.\n**You can view the website by clicking [here](https://cairo2k18.xyz/jackbot).**\nﾠ ﾠ")
             .addField("❤️ Support Server", "This is the bot's official discord server which can be used for support and general discussion on the bot, jacksucksatlife.\n**You can join this by clicking [here](https://discord.gg/jTY4qtF).**\nﾠ ﾠ")
             .addField("🤖 Bot Invite", "**You can invite JackBot by clicking [here](https://discordapp.com/oauth2/authorize?client_id=437439973751521280&permissions=8&scope=bot) or giving this link to your friend:**\n`https://discordapp.com/oauth2/authorize?client_id=437439973751521280&permissions=8&scope=bot`")
             .setFooter("JackBot | Developed by Cairo#4883", config.botownerpfp)
             .setColor(msg.guild.me.displayColor)
        return msg.embed(embed);
    }
};