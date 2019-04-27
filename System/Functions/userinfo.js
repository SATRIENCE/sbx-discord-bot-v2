const Discord = module.require("discord.js")


module.exports.run = async (client, message, args) => {
  console.log('Userinfo Module loaded')
  let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription("This is the user's info!")
    .setColor("9B59B6")
    .addField("Full Username", message.author.tag)
    .addField("ID", message.author.id)
    .addField("Created at", message.author.createdAt);

  message.channel.send({embed: embed});
};

module.exports.help = {
  name: "userinfo"
  //status: "Available"
}
