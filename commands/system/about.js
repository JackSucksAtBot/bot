const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const emojis = require("../../options/emojis.json");

module.exports = class EmbedCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "about",
            group: "system",
            memberName: "about",
            description: "Provides the about section of the bot.s",
            examples: ["about"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .addField(`🤖 About This Bot`,`This bot is a bot full of memes, quotes and many other features that are about JackSucksAtLife. The original version of this bot was created on the **22/04/2018** by \`Cairo#4883\` in \`Discord.JS\` a full list of commands can be found by typing \`jb!help\` or you may continue to read below if you wish to know more about Cairo & JackSucksAtLife.\nﾠ `)
             .addField(`📹 About JackSucksAtLife`,`JackSucksAtLife is a YouTuber from England, United Kingdom and plays Minecraft.\n**You can view a one minute introduction to JackSucksAtLife here:**\nhttps://www.youtube.com/watch?v=wBj1ApMc7ls\nﾠ \n**Social Media:**\n${emojis.youtube} **YouTube:** [JackSucksAtLife](https://youtube.com/JackSucksAtLife)\n${emojis.skycade} **Skycade:** [ID#4](https://skycade.net/members/4/)\n${emojis.twitter} **Twitter:** [@JackMasseyWelsh](https://twitter.com/JackMasseyWelsh)\n${emojis.instagram} **Instagram:** [@jackmasseywelsh](https://www.instagram.com/jackmasseywelsh)\n${emojis.discord} **Discord:** Jack#0320\nﾠ ﾠ`)
             .addField(`💻 About Cairo (The Developer)`,`Cairo is a Discordian from South Island, New Zealand and codes basic bots.\nﾠ \n**Website:**\n:link: Cairo has an official website located [here](https://cairo2k18.xyz).\nﾠ \n**Social Media:**\n${emojis.skycade} **Skycade:** [ID#1957](https://skycade.net/members/1957/)\n${emojis.twitter} **Twitter:** [@CairoNZ](https://twitter.com/CairoNZ)\n${emojis.instagram} **Instagram:** [@Cairo2k18](https://instagram.com/Cairo2k18)\n${emojis.discord} **Discord:** Cairo#4883`)
             .setColor(msg.guild.me.displayColor)
        return msg.embed(embed);
    }
};