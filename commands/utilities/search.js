const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const config = require("../../options/config.json");
const colours = require("../../options/colours.json");
const emojis = require("../../options/emojis.json");
const secrets = require("../../options/secrets.json");

module.exports = class SearchCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "search",
            aliases: ["google","bing","duckduckgo","yahoo","yahoo!","youtube","netflix","vimeo","websearch","internetsearch"],
            group: "utilities",
            memberName: "search",
            description: "Provides you with a search link for multiple search engines & streaming platforms.",
            examples: ["search <phrase>"],
            guildOnly: true,
            args: [
                {
                    key: "search",
                    prompt: "Please input a word/phrase to search for",
                    type: "string"
                }
            ]
        });
    }

    run(msg, { search }) {
        const embed = new Discord.RichEmbed()
        .addField("🔎 Search Links",`**Search Terms:** \`${search}\`ﾠ ﾠ\n\n**Search Engine Links:**\n[${emojis.google}](https://www.google.com/search?q=${encodeURIComponent(search)}) [${emojis.duckduckgo}](https://duckduckgo.com/?q=${encodeURIComponent(search)}) [${emojis.bing}](https://www.bing.com/search?q=${encodeURIComponent(search)}) [${emojis.yahoo}](https://search.yahoo.com/search?fr2=sb-top-search&p=${encodeURIComponent(search)}) \nﾠ ﾠ\n**Streaming Links:**\n[${emojis.netflix}](https://www.netflix.com/search?q=${encodeURIComponent(search)}) [${emojis.youtube}](https://www.youtube.com/results?search_query=${encodeURIComponent(search)}) [${emojis.vimeo}](https://vimeo.com/search?q=${encodeURIComponent(search)})`)
        .setColor(msg.guild.me.displayColor);
        
        return msg.embed(embed);
    }
};