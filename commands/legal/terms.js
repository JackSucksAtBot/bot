const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class TOSCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "terms",
            aliases: ["tos", "termsofservice", "terms-of-service"],
            group: "legal",
            memberName: "terms",
            description: "Provides you with the bot terms of service",
            examples: ["terms"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .addField("‼ Non Compliance", "Failure to comply with these terms will result in your account being blacklisted, if you do not wish to follow these terms please immediately stop using the bot and kick it from all of the servers you own.\nﾠ ﾠ")
             .addField("📝 Modification",`This was last modified on the 30/10/2018 and takes effect on the 31/10/2018, we reserve all rights to update this at any time without notice.\nﾠ ﾠ`)
             .addField("📕 Terms of Service",`Hello ${msg.author.username},\nThese are the official terms of JackSucksAtBot (JackBot).\n\n**:one: Section 1 - Logging**\nWhen using jackbot you provide us with the ability to log any errors or commands you use to our system through a webhook or database to improve the stability of our bot and better everyone's experience.\n\n**:two: Section 2 - Statistics**\nWhen adding jackbot to your server we are able to use the amount of channels and users you have in your server to contribute to our channel and user acount, additionally your server may also be used in our server count.\n\n**:three: Section 3 - Misuse**\nYou can misuse jackbot by spamming commands with bad intentions, exploiting bad bugs and harming the jackbot service, please note doing this will result in a blacklist from using the jackbot.\n\n**:four: Section 4 - Rights**\nBy using the jackbot service you agree to give up all legal rights, therefore meaning you may not sue jackbot or cairo no matter what happens, we are not liable for damage caused against your server or service.`)
             .setColor(msg.guild.me.displayColor)
             .setTimestamp()
             .setFooter(`Requested by ${msg.author.username}#${msg.author.discriminator}`, msg.author.avatarURL)
        return msg.embed(embed);
    }
};
