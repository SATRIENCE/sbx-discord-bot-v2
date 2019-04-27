const Discord = module.require("discord.js")

module.exports.run = async (client, message, args) => {
    console.log("Ping Module loaded");
    message.channel.send('Pong! ' + (Date.now() - message.createdTimestamp) + 'ms')
}

module.exports.help = {
  name: "ping"
  //status: "Available"
}
