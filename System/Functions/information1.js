const Discord = module.require("discord.js")


module.exports.run = async (client, message, args) => {
  console.log('Information1 Module loaded')
  let embed = new Discord.RichEmbed()
    .setAuthor("Welcome")
    .setDescription(`This is object will be a reading section for this channel. \nThere will be multiple reading sections like this to cover details about Alpha Authority. \n \nAs so, this channel will be filled out soon! \n \nThank you for your patience being here. \n - ScriptIntelligence`)
    .setColor("9B59B6");

  message.channel.send({embed: embed});
};

module.exports.help = {
  name: "information1"
  //status: "Available"
}
