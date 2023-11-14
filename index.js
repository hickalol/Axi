const { Client, Collection, GatewayIntentBits } = require("discord.js")
const Discord = require("discord.js")
const client = new Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent
  ]
});

const config = require("./src/config.js");
const { readdirSync } = require("fs")
let token = config.token

client.on("ready", async () => {
    console.log(`AXIOMA DISCORD logged in as ${client.user.tag}.`);
    client.user.setPresence({ activities: [{ name: 'Crawling' }], status: 'idle' });
});

client.login(token)