const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class MemeHelpCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "memes",
            group: "help",
            memberName: "memes",
            description: "The menu for the meme commands in the help section.",
            examples: ["memes"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .addField("📸 Help: Memes","All commands use the prefix `jb!`\nIf there are any issues please join the support server [https://discord.gg/jTY4qtF](https://discord.gg/jTY4qtF)\nﾠ ﾠ")
             .addField("💬 Commands (45)","**|** `dead` **|** `vomit` **|** `immature` **|** `retard` **|**\n**|** `sticktotheformat` **|** `excited` **|** `gtfo` **|** `junk` **|** `dump` **|**\n**|** `cleaver` **|** `kazoodrop` **|** `smh` **|** `crotch` **|** `murderer` **|**\n**|** `psychopath` **|** `weird` **|** `alien` **|** `shocked` **|** `uhh` **|** `wtf` **|**\n**|** `singing` **|** `suited` **|** `please` **|** `angry` **|** `angelic` **|**\n**|** `kazooholder` **|** `flamin` **|** `satan` **|** `thinking` **|** `swirl` **|**\n**|** `overnight` **|** `kazoo` **|** `explosion` **|** `derp` **|** `twitterllama` **|**\n**|** `monster` **|** `duet` **|** `broke` **|** `paidpromotion` **|** `nose` **|**\n**|** `bloodyhell` **|** `djjack` **|** `lsd` **|** `university` **|**")
             .setColor(msg.guild.me.displayColor)
             .setFooter("JackBot | Developed by Cairo#4883", config.botownerpicture)
        return msg.embed(embed);
    }
};