const botSettings = require('./Configurations/settings.json')
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', async () => {
	console.log(' ')
	console.log('SBXBot\'s Main-Frame is up and running!');
	console.log(' ');

	try {
		let ADMINISTRATOR_INVITE_LINK = await client.generateInvite(["ADMINISTRATOR"]);
		console.log(' | - ' + ADMINISTRATOR_INVITE_LINK)
	} catch(error) {
		console.log(' ')
		console.log(' | - ' + e.stack);
	}
});

client.login(botSettings.token);
