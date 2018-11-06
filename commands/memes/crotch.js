const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class CrotchCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "crotch",
            group: "memes",
            memberName: "crotch",
            description: "Hehehehhe - I'm just looking down",
            examples: ["crotch"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**I'm just looking at down at my crotch.\nTotally normal :point_down:**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/crotch.png")
             .setColor(0x425791)
        return msg.embed(embed);
    }
};
