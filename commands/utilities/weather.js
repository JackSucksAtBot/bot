const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");
const weather = require("weather-js");

const config = require("../../options/config.json");
const colours = require("../../options/colours.json");
const emojis = require("../../options/emojis.json");

module.exports = class WeatherCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "weather",
            group: "utilities",
            memberName: "weather",
            description: "Gives you information on the weather in that location",
            examples: ["weather <location>"],
            guildOnly: true,
            args: [
                {
                    key: "location",
                    prompt: "Please specify a location.",
                    type: "string"
                },
                {
                    key: "degree",
                    prompt: "Please select either `C` or `F`",
                    type: "string"
                }
            ]
        });
    }

    run(msg, { location, degree }) {
            var placenoexist = new Discord.RichEmbed()
               .setDescription(`${emojis.no} **Unknown Location** - The location you entered is either not real or not real.`)
               .setColor(colours.error);
 
            weather.find({search: location, degreeType: degree}, function(err, result) { 
            if (err) msg.send(err);

            if (result == undefined || result.length == 0) {
                msg.embed(placenoexist)
            }
 
            var current = result[0].current; 
            var location = result[0].location;

            var embed = new Discord.RichEmbed()
               .setAuthor(`Weather for ${current.observationpoint}`, "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/141/pushpin_1f4cc.png")
               .setDescription(`**${current.skytext}**\nﾠ ﾠ`) 
               .setThumbnail(current.imageUrl) 
               .setColor(msg.guild.me.displayColor) 
               .addField("🕒 Timezone",`UTC ${location.timezone}`, true) 
               .addField("❓ Degree Type",`${location.degreetype}`, true)
               .addField("🌡 Temperature",`${current.temperature} Degrees`, true)
               .addField("🤒 Feels Like",`${current.feelslike} Degrees`, true)
               .addField("🌬 Winds",`${current.winddisplay}`, true)
               .addField("💧 Humidity",`${current.humidity}%`, true)
               .setFooter("JackBot | Developed by Cairo#4883", config.botownerpfp)
            msg.embed(embed);
            });
    }
};