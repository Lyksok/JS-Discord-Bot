// Import the necessary discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

// Create client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When client ready run code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

// Login discord bot with secret token
client.login(process.env.TOKEN);
