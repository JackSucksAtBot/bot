//let result = Math.floor((Math.random() * replies.length));

const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");
const colours = require("../../options/colours.json");
const emojis = require("../../options/emojis.json");
const secrets = require("../../options/secrets.json");

module.exports = class EightBallCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "8ball",
            aliases: ["eightball"],
            group: "utilities",
            memberName: "8ball",
            description: "Gives you a random response to a question asked.",
            examples: ["giphy <word>"],
            guildOnly: true,
            throttling: {
                usages: 1,
                duration: 2,
            },
            args: [
                {
                    key: "question",
                    prompt: "Please input your question you want to 8ball",
                    type: "string"
                }
            ]
        });
    }

    run(msg, { question }) {
        var replyarray = ["It is certain.", "It is uncertain.", "Ask again another time.", "Please ask again.", "It will never."];
        let math = Math.floor((Math.random() * replyarray.length));

        const embed = new Discord.RichEmbed()
        .setAuthor("🎱 8Ball")
        .setDescription(`The 8ball has responded to your question of \`${question}\` with **${replies[result]}**`)
        .setColor(0x424242);

        return msg.embed(embed);
    }

};