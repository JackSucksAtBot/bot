const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");

module.exports = class SatanCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "satan",
            group: "memes",
            memberName: "satan",
            description: "*demonic voice activated*",
            examples: ["satan"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Satan.. is that you..?** :dizzy_face:")
             .setColor(0xe2e2e2)
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/satan.png")
             .setFooter("From video https://youtu.be/mvCK7f2xk0Q", config.ytlogo)
        return msg.embed(embed);
    }
};
