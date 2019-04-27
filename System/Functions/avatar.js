const Discord = module.require("discord.js")

module.exports.run = async (client, message, args) => {
    console.log("Avatar Module loaded");
    message.channel.send('This command is currently unavailable.')
}

module.exports.help = {
  name: "avatar"
  //status: "Available"
}
