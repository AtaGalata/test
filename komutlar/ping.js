const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    message.channel.send("Pong "+client.ws.ping)
    console.log("mesaj")
}
exports.conf = {
  aliases: [], //Ana Komut Dışında Çalıştırabilecek Yan Komutlar
  komut: "ping" //Ana Komut
};