const Discord = module.require("discord.js")


module.exports.run = async (client, message, args) => {
  console.log('Modules Module loaded')
  message.channel.send('**Command List:**\n ``;avatar`` : N/A \n ``;commands`` : Available \n ``;information1`` : Available \n ``;modules`` : N/A \n ``;ping`` : Available \n ``;userinfo`` : Available')
};

module.exports.help = {
  name: "commands"
  //status: "Available"
}
