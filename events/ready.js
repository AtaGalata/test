module.exports = (client) => {
    client.user.setPresence({activity: {name: "OnlyFans", type: "WATCHING"}, status: "dnd"})
    console.log(`${client.user.tag} --- Adlı Bot Aktif\n`);
}