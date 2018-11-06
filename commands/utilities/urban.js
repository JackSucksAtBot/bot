const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");
//const urban = require("urban");
const urban = require("relevant-urban");

const config = require("../../options/config.json");
const colours = require("../../options/colours.json");
const emojis = require("../../options/emojis.json");

module.exports = class UrbanCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "urban",
            group: "utilities",
            memberName: "urban",
            description: "Gives you the definition of a word on urban dictionary.",
            examples: ["urban <word>"],
            guildOnly: true,
            nsfw: true,
            args: [
                {
                    key: "word",
                    prompt: "Please input a word/phrase to search for",
                    type: "string"
                }
            ]
        });
    }

    async run(msg, { word }) {
        let ud = await urban(word).catch(e => {
            const nonWord = new Discord.RichEmbed()
            .setDescription(`${emojis.no} **Unknown Word** - The word/phrase you entered was not found on UD.`)
            .setColor(colours.error);

            msg.embed(nonword);
        });

        const embed = new Discord.RichEmbed()
        .addField("🔎 Word",`[${ud.word}](${ud.urbanURL})`, true)
        .addField("👤 Author",`${ud.author}`, true)
        .addField("🌟 Upvotes",`${ud.thumbsUp}`, true)
        .addField("💥 Downvotes",`${ud.thumbsDown}`, true)
        .addField("📔 Definition",`${ud.definition}`)
        .addField("❓ Example",`${ud.example}`)
        .setThumbnail("http://a2.mzstatic.com/us/r30/Purple/v4/dd/ef/75/ddef75c7-d26c-ce82-4e3c-9b07ff0871a5/mzl.yvlduoxl.png")
        .setColor(0xffcc00);

        return msg.embed(embed);
    }
};