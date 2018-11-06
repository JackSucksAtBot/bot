const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const count = require("unirest");

const config = require("../../options/config.json");
const emojis = require("../../options/emojis.json");
const secrets = require("../../options/secrets.json");
const colours = require("../../options/colours.json");
const webhook = require("../../options/webhook.json");
const logs = new Discord.WebhookClient(webhook.logid, webhook.logtoken);

module.exports = class RequestCommand extends JackBotHandler.Command {
    constructor(client) {
        super(client, {
            name: "request",
            group: "ate",
            memberName: "request",
            description: "Allows you to make an http request to update server count on bot lists.",
            examples: ["request <confirmation>"],
            guildOnly: true,
            args: [
                {
                    key: "confirmation",
                    prompt: "Are you sure you want to repost server count to all lists",
                    type: "boolean"
                }
            ]
        });
    }
    
    hasPermission(msg) {


        const insuffPerms = new Discord.RichEmbed()
        .setDescription(`${emojis.no} **Insufficient Permission(s)** - You must be a BotOwner to use this command.`)
		.setColor(colours.error);
		
		if (msg.author.id != config.botownerid) return msg.embed(insuffPerms), false;
		return true;
    }

    run(msg, { confirmation }) {
        if (confirmation == true) {
            count.post("https://botblock.org/api/count")
            .header("Content-Type", "application/json")
            .send({ 
            "server_count": `${this.client.guilds.size}`, 
            "bot_id": `${this.client.user.id}`, 
            "discordbots.org": `${secrets.discordbotsorg}`, 
            "botlist.space": `${secrets.botlistspace}`, 
            "discordboats.club": `${secrets.discordboatsclub}`, 
            "discordbotlist.com": `${secrets.discordbotlistcom}`, 
            "discordbotlist.xyz": `${secrets.discordbotlistxyz}`, 
            "discordbot.world": `${secrets.discordbotworld}`, 
            "bots.discord.pw": `${secrets.botsdiscordpw}`, 
            "bots.ondiscord.xyz": `${secrets.botsondiscordxyz}`, 
            "discordboats.xyz": `${secrets.discordboatsxyz}`, 
            "bots.discordlist.app": `${secrets.botsdiscordlistapp}` })
            .end(function (response) {
                console.log(response.body);
                
                const embed = new Discord.RichEmbed()
                .setDescription(`${emojis.yes} **Success** - Successfully sent an http POST request.\n\n\`\`\`Details were logged to the console.\`\`\``)
                .setColor(colours.success);

                msg.embed(embed);

                const telemetryGcountpost = new Discord.RichEmbed()
                .setAuthor("Manual Guild Post Count Event")
                .setDescription(`**Posted Count to All Lists:** ${emojis.yes}\n---\n**Bot Server Count:** \`${this.client.guilds.size}\`\n**Bot Channels Count:** \`${this.client.channels.size}\`\n**Bot Member Count:** \`${this.client.users.size}\``)
                .setTimestamp()
                .setThumbnail(webhook.logcountpost)
                .setColor(colours.logcountpost);
                logs.send(telemetryGcountpost);

                return;
            });

        } else {
            const abort = new Discord.RichEmbed()
            .setDescription(`${emojis.no} **Aborted** - Cancelled sending \`server_count\` to all bot lists.`)
            .setColor(colours.error);

            return msg.embed(abort);
        }
    }
};