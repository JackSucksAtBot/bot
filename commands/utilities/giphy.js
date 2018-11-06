const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const snek = require("snekfetch");

const config = require("../../options/config.json");
const colours = require("../../options/colours.json");
const emojis = require("../../options/emojis.json");
const secrets = require("../../options/secrets.json");

module.exports = class GiphyCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "giphy",
            aliases: ["gif"],
            group: "utilities",
            memberName: "giphy",
            description: "Gives you a random gif off giphy.",
            examples: ["giphy <word>"],
            guildOnly: true,
            nsfw: true,
            throttling: {
                usages: 1,
                duration: 60,
            },
            args: [
                {
                    key: "gifsearch",
                    prompt: "Please input a word/phrase to search for",
                    type: "string"
                }
            ]
        });
    }

    async run(msg, { gifsearch }) {

        snek.get(`http://api.giphy.com/v1/gifs/random?api_key=${secrets.giphyapi}&tag=${encodeURIComponent(gifsearch)}&rating=pg13`).then(r => {
            const notfound = new Discord.RichEmbed()
            .setDescription(`${emojis.no} **Error** - I was unable to find a gif matching your query.`)
            .setColor(colours.error);

            const embed = new Discord.RichEmbed()
            .setTitle("Click here if you are unable to view the gif.")
            .setURL(r.body.data.image_original_url)
            .setImage(r.body.data.image_original_url)
            .setFooter("Powered by Giphy", config.giphylogo)
            .setColor(msg.guild.me.displayColor);
            if (!r.body.data.image_original_url) return msg.embed(notfound);
            return msg.embed(embed);
        });
    }
};