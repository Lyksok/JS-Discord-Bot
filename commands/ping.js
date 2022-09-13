const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong"),
  async execute(interaction) {
    return new Promise(async (resolve, reject) => {
      await interaction.reply("Pong !").catch((error) => {
        reject(error);
      });
      resolve();
    });
  },
};
