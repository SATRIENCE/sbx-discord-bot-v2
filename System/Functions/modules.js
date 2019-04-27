const Discord = module.require("discord.js")


module.exports.run = async (client, message, args) => {
  console.log('Modules Module loaded')
  message.channel.send('This command is currently unavailable. \n You can refer to the command list for working commands.')
  //commandlist.forEach() => {
  //  let props = require(`./Functions/${f}`);
  //  message.channel.send(`${f} loaded!`)
  //  client.commands.set(props.help.name, props);
  //  message.channel.send();
  //  return
//});
//  message.channel.send(commandlist.get[0]);
};

module.exports.help = {
  name: "modules"
  //status: "Unavailable"
}
