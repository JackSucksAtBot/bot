const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class SingingCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "singing",
            group: "memes",
            memberName: "singing",
            description: "Baby, baby, baby ooh",
            examples: ["singing"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**And I was like baby, baby, baby oh** :microphone:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/singing.png")
             .setColor(0xcccccc)
             .setFooter("From video https://youtu.be/snhzjJmp0E0", config.ytlogo)
        return msg.embed(embed);
    }
};
