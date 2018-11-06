///////////////////////////////////////////////////////////////////////////////////
// 
// ❓ Information |
//
// JackBot is a Discord Bot based on the YouTuber JackSucksAtLife,
// JackBot provides memes, quotes and just general utility commands to
// help improve your experience on Discord and keep you in the now with
// what is going on with JackSucksAtLife and the rest of the world.
// 
// 💖 Support Notice |
// 
// I will never provide support if you are running JackBot locally,
// in fact; *** I HIGHLY DISCOURAGE LOCALLY HOSTING JACKBOT ***
// this code is public so the community can make contributions if they wish
// and help find bugs etc.
//
// 🚨 Dependencies |
// 
// *** Node.JS is Required before all of the following ***
// ** You install all of the dependencies below when doing 'npm install' in cmd/terminal etc. **
// * Please note more dependencies will be installed - please ignore this *
//
// Refer to package.json for further information
//
// 📥 Downloading & Installing |
//  
// Visit https://cairo2k18.xyz/jackbot/ for information regarding selfhosting
// 
// 🔗 Links |
//  
// ☆ Website - https://cairo2k18.xyz/jackbot
// ☆ Bugs - 
// ☆ Bot Invite - https://goo.gl/zy8Fye (USE THE OFFICIAL BOT FOR SUPPORT - DO NOT LOCAL HOST)
// ☆ Service Status - https://jackbot.statusy.co
// ☆ GitHub Repository - https://github.com/cairo2k18/jackbot
//                                                                               
// 🎫 License |                                                                
//                                                                               
// Copyright (c) 2018 Cairo Mitchell-Acason - Cairo#4883                                     
//                                                                               
// This program is free software: you can redistribute it and/or modify          
// it under the terms of the GNU Affero General Public License as published by   
// the Free Software Foundation, either version 3 of the License, or             
// (at your option) any later version.                                         
//                                                                               
// This program is distributed in the hope that it will be useful,               
// but WITHOUT ANY WARRANTY; without even the implied warranty of                
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                 
// GNU Affero General Public License for more details.                           
//                                                                               
///////////////////////////////////////////////////////////////////////////////////

const JackBotHandler = require("jackbot-commando");
const Discord = require("discord.js");

const sqlite = require("sqlite");
const count = require("unirest");
const path = require("path");
const pm2 = require("pm2");

const secrets = require("./options/secrets.json");
const config = require("./options/config.json");
const webhook = require("./options/webhook.json");
const colours = require("./options/colours.json");

const client = new JackBotHandler.Client({
  commandPrefix: config.prefix,
  owner: config.botownerid,
  disableEveryone: true,
  unknownCommandResponse: false,
  nonCommandEditable: false,
  commandEditableDuration: 10,
  invite: "https://discord.gg/jTY4qtF"
});

const logs = new Discord.WebhookClient(webhook.logid, webhook.logtoken);

sqlite.open(path.join(__dirname, "settings.sqlite3")).then((db) => {
    client.setProvider(new JackBotHandler.SQLiteProvider(db));
});

client.registry
    .registerGroups([  
        ["help", "help"],
        ["system", "system"],
        ["memes", "memes"],
        ["video memes", "video memes"],
        ["utilities", "utilities"],
        ["legal", "legal"],
        ["ate", "ate"]
    ])
    .registerDefaultTypes()
    .registerCommandsIn(path.join(__dirname, "commands"));

client.on("ready", () => {
  console.log("________________________________________");
  console.log("| JACKBOT (JACKSUCKSATBOT) LEGAL NOTES |");
  console.log("SYSTEM WARN: This client uses the AGPL-3.0 license");
  console.log("SYSTEM WARN: The original code for this client was created by Cairo John Mitchell-Acason (Cairo#4883)");
  console.log("_________________________________________");
  console.log("| JACKBOT (JACKSUCKSATBOT) COMMAND LINE |");
  console.log("SYSTEM CONNECTION NOTICE: I have succesfully connected to the Discord Services & API");
  console.log("SYSTEM BOTINFO NOTICE: I am currently in " + client.guilds.size + " guilds");
  client.user.setActivity("JackSucksAtLife Memes", { type: "WATCHING" }); 
  client.user.setStatus("online");
});

client.on("guildCreate", (message) => {
    const telemetryGjoin = new Discord.RichEmbed()
    .setAuthor("Guild Join Event")
    .setDescription(`**Guild Name:** ${guild.name} \`(${guild.id})\`\n**Guild Owner:** ${guild.owner} \`(${guild.ownerID})\`\n**Guild Members:** \`${guild.memberCount}\`\n---\n**Bot Server Count:** \`${client.guilds.size}\`\n**Bot Channels Count:** \`${client.channels.size}\`\n**Bot Member Count:** \`${client.users.size}\``)
    .setTimestamp()
    .setThumbnail(webhook.logjoin)
    .setColor(colours.logjoin);
    logs.send(telemetryGjoin);
});

client.on("guildDelete", (message) => {
    const telemetryGleave = new Discord.RichEmbed()
    .setAuthor("Guild Leave Event")
    .setDescription(`**Guild Name:** ${guild.name} \`(${guild.id})\`\n**Guild Owner:** ${guild.owner} \`(${guild.ownerID})\`\n**Guild Members:** \`${guild.memberCount}\`\n---\n**Bot Server Count:** \`${client.guilds.size}\`\n**Bot Channels Count:** \`${client.channels.size}\`\n**Bot Member Count:** \`${client.users.size}\``)
    .setTimestamp()
    .setThumbnail(webhook.logleave)
    .setColor(colours.logleave);
    logs.send(telemetryGleave);
});

client.on("ready", (message) => {
    const telemetrySTARTlog = new Discord.RichEmbed()
	.setAuthor("Client Start Event")
	.setDescription(`**Bot Uptime** \`${client.uptime}ms\`\n---\n**Bot Server Count:** \`${client.guilds.size}\`\n**Bot Channels Count:** \`${client.channels.size}\`\n**Bot Member Count:** \`${client.users.size}\``)
	.setColor(colours.logstart)
	.setThumbnail(webhook.logstart)
	.setTimestamp();
    logs.send(telemetrySTARTlog);
});

// ⬇️ REMOVE IN NON PRODUCTION ENVIROMENT ⬇️

client.on("ready", () => {
    count.post("https://botblock.org/api/count")
    .header("Content-Type", "application/json")
        .send({ 
        "server_count": `${client.guilds.size}`, 
        "bot_id": `${client.user.id}`, 
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
    });
});

client.on("guildCreate", () => {
    count.post("https://botblock.org/api/count")
    .header("Content-Type", "application/json")
        .send({ 
        "server_count": `${client.guilds.size}`, 
        "bot_id": `${client.user.id}`, 
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
    });
});

client.on("guildDelete", () => {
    count.post("https://botblock.org/api/count")
    .header("Content-Type", "application/json")
        .send({ 
        "server_count": `${client.guilds.size}`, 
        "bot_id": `${client.user.id}`, 
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
    });
});

// ⬆️ REMOVE IN NON PRODUCTION ENVIROMENT ⬆️

client.login(secrets.token);


