const { prefix } = require("../cfg")
//---Made By AtaGalata---//
module.exports = async message => {
  let client = message.client;
//---Made By AtaGalata---//
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  if (!message.content.startsWith(prefix)) return;
//---Made By AtaGalata---//
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
//---Made By AtaGalata---//
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
//---Made By AtaGalata---//
    cmd.run(client, message, params);
  }
};
