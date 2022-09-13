const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("echo")
    .setDescription("Replies with given input")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("The input to echo back")
        .setRequired(true)
    ),
  async execute(interaction) {
    await new Promise(async (resolve, reject) => {
      await interaction.reply(
        interaction.options.getString("input").catch((error) => {
          reject(error);
        })
      );
      resolve();
    });
  },
};
