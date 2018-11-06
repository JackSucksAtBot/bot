const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");
const os = require("os");
const ms = require("ms");

const emojis = require("../../options/emojis.json");
const config = require("../../options/config.json");

module.exports = class EmbedCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "info",
            aliases: ["botinfo", "stats", "version"],
            group: "system",
            memberName: "info",
            description: "Provides information and stats on the bot",
            examples: ["about"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .addField("💽 Operating System", `${os.platform} ${os.release}`, true)
             .addField(`📡 Bot Uptime`,`${ms(1 * this.client.uptime , { long: true })}`, true)
             .addField("🖥 Bot Version",`${config.version}`, true)
             .addField("🛡 Guild Count",`${this.client.guilds.size}`, true)
             .addField("💬 Channel Count",`${this.client.channels.size}`, true)
             .addField("👥 User Count",`${this.client.users.size}`, true)
             .addField("🔗 Links","• [Bot Invite](https://discordapp.com/oauth2/authorize?client_id=437439973751521280&permissions=314440&scope=bot)\n• [Website](https://cairo2k18.xyz/jackbot)\n• [Vote](https://discordbots.org/bot/437439973751521280/vote)")
             .setColor(msg.guild.me.displayColor)
        return msg.embed(embed);
    }
};