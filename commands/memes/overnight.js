const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class OvernightCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "overnight",
            group: "memes",
            memberName: "overnight",
            description: "overnight challenge anyone?",
            examples: ["overnight"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Picture this.. \*overnight challenge in a kazoo\* :frame_photo:**")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/overnight.png")
             .setColor(0x5ae4fc)
             .setFooter("From video https://youtu.be/fqlZW4XDQiI", config.ytlogo)
        return msg.embed(embed);
    }
};
