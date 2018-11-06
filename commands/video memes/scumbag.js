const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");
const DBL = require("dblapi.js");

const config = require("../../options/config.json");
const colours = require("../../options/colours.json");
const secrets = require("../../options/secrets.json");
const emojis = require("../../options/emojis.json");

const client = this.client;
const dbl = new DBL(secrets.discordbotsorg, client);

module.exports = class ScumbagCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "scumbag",
            group: "video memes",
            memberName: "scumbag",
            description: "You lil' scumbag",
            examples: ["scumbag"],
            guildOnly: true
        });
    }

    run(msg) {

        if (this.client.user.id != "437439973751521280") {
            const modinstance = new Discord.RichEmbed()
            .setDescription(`${emojis.no} **Modified/Self Hosted Instance** - You are unable to use Video Meme commands when selfhosting.`)
            .setColor(colours.error)
            return msg.embed(modinstance);
        } else

        dbl.hasVoted(msg.author.id).then(voted => {
            if (voted) {

                const embed2 = new Discord.RichEmbed()
                .setDescription("**You lil' scumbag :anger:**\nﾠ ﾠ")
                .addField("⏱ File Upload", "**This video can take up to 15 seconds for Discord to process.**\nﾠ ﾠ")
                .addField("❤ Donating", "**Please consider donating to JackBot to help support further development [here](https://donatebot.io/checkout/437423842244165633)**")
                .setColor(msg.guild.me.displayColor);
                msg.embed(embed2);

                return msg.channel.send(`${msg.author}`, {
                    file: "http://cairo2k18.xyz/src/offsite/jackbot/scumbag.mp4" 
                });
            } else

        var supportServer = this.client.guilds.get("437423842244165633").member(msg.author.id);

        if (supportServer == undefined) {
            const embed3 = new Discord.RichEmbed()
            .setDescription(`${emojis.no} **Insufficient Permission(s)** - You must have either voted [here](https://discordbots.org/bot/${config.botid}/vote), or be a Donator.`)
            .setFooter("Please note it can take up to five minutes to register your vote.")
            .setColor(colours.error)
            return msg.embed(embed3);
        } else

        if (supportServer.roles.has("457710312775221251")) {
                const embed = new Discord.RichEmbed()
                .setDescription("**You lil' scumbag :anger:**\nﾠ ﾠ")
                .addField("⏱ File Upload", "**This video can take up to 15 seconds for Discord to process.**")
                .setColor(msg.guild.me.displayColor);
                msg.embed(embed);

                msg.channel.send(`${msg.author}`, {
                    file: "http://cairo2k18.xyz/src/offsite/jackbot/scumbag.mp4" 
                });
                
             } else  {
                const embed4 = new Discord.RichEmbed()
                     .setDescription(`${emojis.no} **Insufficient Permission(s)** - You must have either voted [here](https://discordbots.org/bot/${config.botid}/vote), or be a Donator.`)
                     .setFooter("Please note it can take up to five minutes to register your vote.")
                     .setColor(colours.error)
                return msg.embed(embed4);
            }
        });
    }
};
