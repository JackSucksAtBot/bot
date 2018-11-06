const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class DerpCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "derp",
            group: "memes",
            memberName: "derp",
            description: "*insertdroolemojihere*",
            examples: ["derp"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**wait what.. uhh** :drooling_face:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/derp.png")
             .setColor(0xc66225)
             .setFooter("From video https://youtu.be/b9eqxonESeo", config.ytlogo)
        return msg.embed(embed);
    }
};
