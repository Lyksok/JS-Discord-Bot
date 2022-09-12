module.exports = {
  name: "ping-command",
  description: "Replies with Pong",
  execute: function (interaction, client) {
    return new Promise(async (resolve, reject) => {
      await interaction.reply("Pong").catch((error) => {
        reject(error);
      });
      resolve();
    });
  },
};
