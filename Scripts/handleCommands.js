const { SlashCommandBuilder, Routes } = require("discord.js");
const { REST } = require("@discordjs/rest");
const dotenv = require("dotenv");
dotenv.config();
const { TOKEN, guildId, clientId } = process.env;

const commands = [
  new SlashCommandBuilder().setName("ping").setDescription("Replies with pong"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(TOKEN);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then((data) =>
    console.log(`Successfully registered ${data.length} application commands.`)
  )
  .catch((error) => console.log(error));
