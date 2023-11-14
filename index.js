const { Client, Collection, GatewayIntentBits } = require("discord.js")
const Discord = require("discord.js")
const { token } = require('./config.json');
const client = new Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent
  ]
});

const config = require("./src/config.js");
const { readdirSync } = require("fs")

client.on("ready", async () => {
    console.log(`AXIOMA DISCORD logged in as ${client.user.tag}.`);
    client.user.setPresence({ activities: [{ name: 'Crawling' }], status: 'idle' });
});

client.on("messageCreate", function(message) {
  if (message.author == client.user)
  return;
  if (message.author.bot)
  return;
  if (message.content === 'a') {
    message.channel.send('b');
  }
  if (message.content === 'owo') {
    message.channel.send("uwu");
  }
  if (message.content === "uwu") {
    message.channel.send("owo");
  }
});

client.login(token)
