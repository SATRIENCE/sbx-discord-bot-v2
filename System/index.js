
const botSettings = require('./Configurations/settings.json')
const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client({disableEveryone: true});
client.commands = new Discord.Collection();

//

client.on('ready', () => {
	console.log(' ')
	console.log('SBXBot\'s Main-Frame is up and running!');
	console.log(' ');
	console.log(client.commands);
	console.log(' ')
});

//

fs.readdir("./System/Functions/", (err, files) => {
	if(err) console.error(err);

	let jsfiles = files.filter(f => f.split('.').pop() === "js");
	if(jsfiles.length <= 0) {
		console.log(' ')
		console.log("No commands to load!");
		return;
	}

	console.log(`Loading ${jsfiles.length} commands!`);

	jsfiles.forEach((f, i) => {
		let props = require(`./Functions/${f}`);
		console.log(` | - Command ${i + 1} ${f} loaded!`)
		client.commands.set(props.help.name, props);
		return
	});
});

//

client.on("message", async message => {
	console.log('Message was sent');

	if (message.content.startsWith("<@261932880786096130>")) {
		message.channel.sendMessage("You can't talk to me, I'm a bot! Try ;commands");
	};

	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1);

	console.log(' | - Message Prefix has been recognized')
	let cmd = client.commands.get(command.slice(botSettings.prefix.length));
	if(cmd) cmd.run(client, message, args);

});



client.login(botSettings.token);
