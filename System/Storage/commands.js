const Discord = module.require("discord.js")


module.exports.run = async (client, message, args) => {
  console.log('Commands Module loaded')
  message.channel.send('**Command List:**\n ;avatar \n ;commands \n ;modules \n ;ping \n ;userinfo')
};

module.exports.help = {
  name: "commands"
  //status: "Available"
}
