const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Shows usefull informations about this server"),
  async execute(interaction) {
    return new Promise(async (resolve, reject) => {
      await interaction
        .reply(
          `Name of the server: ${interaction.guild.name}\nThis server has ${interaction.guild.memberCount} members`
        )
        .catch((error) => {
          reject(error);
        });
      resolve();
    });
  },
};
