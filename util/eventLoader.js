const reqEvents = event => require(`../events/${event}`)

module.exports = (client) => {

    client.on("ready", () => reqEvents("ready")(client))
    client.on("message", reqEvents("message"))

}