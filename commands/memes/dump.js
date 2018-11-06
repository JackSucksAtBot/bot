const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

module.exports = class DumpCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "dump",
            group: "memes",
            memberName: "dump",
            description: "My room is a mess now, ugh.",
            examples: ["dump"],
            guildOnly: true
        });
    }

    run(msg) {
        const embed = new Discord.RichEmbed()
             .setDescription("**Look at this bloody mess you made guys** :angry:")
             .setImage("https://cairo2k18.xyz/src/offsite/jackbot/dump.png")
             .setColor(0xa02121)
        return msg.embed(embed);
    }
};
