//Dear stalker, I truly hope and wish with my entire heart that you enjoy pasta in any form, because this shit is the biggest spagetthi you'll ever read.
//My regards, Celeste.       ╱|、
//                         (˚ˎ 。7  
//                         |、˜〵          
//                        じしˍ,)ノ

const { Client, Collection, GatewayIntentBits } = require("discord.js")
const Discord = require("discord.js")
const { token } = require('./config.json');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ]
});

// i want to die.

const config = require("./src/config.js");
const { readdirSync } = require("fs")

client.on("ready", async () => {
    console.log(`AXIOMA DISCORD logged in as ${client.user.tag}.`);
    client.user.setPresence({ activities: [{ name: 'Lurking' }], status: 'idle' });
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
  if (message.content === 'i win') {
    const responses = ["nuh uh", "no u dont", "https://cdn.discordapp.com/attachments/1102810909346381947/1174109036984160256/latest.png", "hey guess what? your mother!!!"];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    message.channel.send(randomResponse);
  }
  if (message.content === "727") {
    message.reply(`kindly stop before i contact the authorities about you`);
  }
  if (message.content === "can u stop") {
    const responses = ['i dont think so', 'no', 'nuh uh', 'nope', 'im afraid i cant do that dave']
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    message.channel.send(randomResponse);
  }
  if (message.content === 'is chimken gay?') {
    message.channel.send('Pretty sure he is...');
  }
  if (message.author.bot) return;
   if (message.content === 'cookies') {
    message.channel.send('Cookies are trackers that are consistent of sets of data stored in the users browser!!!!!');
  }
  if (message.content === "!sex") {
    const responses = ["fucking die", "chimken, stop.", "go makeout with a trash can", "does your mom know about your online activity? no? she will now.", "hey, that discord @ to nera looks very attractive, doesnt it?"]
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    message.reply(randomResponse);
  }
  if (message.content.startsWith('!bitches')) {
    const responses = ['lmao bitchless noob', 'no bitches?', 'https://cdn.discordapp.com/attachments/1102810909346381947/1174114316195213312/megamind-no-bitches-meme-3264x3264-v0-gb5bw6safuu81.png', 'https://cdn.discordapp.com/attachments/1102810909346381947/1174114332305526914/no-bitches-v0-fc641jeg4ej81.png']
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    message.reply(randomResponse);
  }
});

client.login(token)
