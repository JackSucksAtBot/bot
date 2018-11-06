const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class PrivacyPolicyCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "privacy",
            aliases: ["privacy-policy"],
            group: "legal",
            memberName: "privacy",
            description: "Provides you with the bot's privacy policy",
            examples: ["privacy"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .addField("‼ Disagree", "If you disagree with this policy please immediately stop using the bot and kick it from all of the servers you own.\nﾠ ﾠ")
             .addField("📝 Modification",`This was last modified on the 29/09/2018 and takes effect on the 28/09/2018, we reserve all rights to update this at any time without notice.\nﾠ ﾠ`)
             .addField("📘 Privacy Policy",`Hello ${msg.author.username},\nThis is the official privacy policy for JackSucksAtBot (JackBot).\n\n**:one: Section 1 - Data**\nWe may collect your data without your consent to improve the bot service, we will not sell this to other companies such as Google LLC, Microsoft or Apple Inc.\n\n:two: **Section 2 - Children**\nWe do not knowingly collect data from children, if you believe we have collected data from a child please report it to us immediately with proof via email: __**admin@cairo2k18.xyz**__, additionally you may report them to discord as users under 13 violates the discord terms of service [https://dis.gd/request](https://dis.gd/request).\n\n**:three: Section 3 - Discord Privacy Policy**\nThe rest of this privacy policy is governed under the official discord privacy policy located [here](https://discordapp.com/privacy).`)
             .setColor(msg.guild.me.displayColor)
             .setTimestamp()
             .setFooter(`Requested by ${msg.author.username}#${msg.author.discriminator}`, msg.author.avatarURL)
        return msg.embed(embed);
    }
};
