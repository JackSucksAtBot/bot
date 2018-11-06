const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class EffectsCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "effects",
            group: "help",
            memberName: "effects",
            description: "Ooooh yes.",
            examples: ["effects"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**tHesE soUnd eFfEcts aRe aMazInG** :loud_sound:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/effects.png")
             .setColor(0xfcf7f7)
             .setFooter("From video https://youtu.be/J87m-Ar7GM8", config.ytlogo)
        return msg.embed(embed);
    }
};