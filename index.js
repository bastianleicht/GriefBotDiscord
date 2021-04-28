/*
 *   Copyright (c) 2021 Bastian Leicht
 *   All rights reserved.
 *   https://bastianleicht.de/license
 */
// jshint esversion: 8
const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require("fs");

const Enmap = require("enmap");

const config = require("./config.json");
client.config = config;
client.commands = new Enmap();

client.initializedUsers = [];     // Array der initialisierten User
client.listeningUsers = [];       // Array der User deren Nachrichten gelesen werden sollen
client.currentDate = getDate();   // Das derzeitige Datum (nur für die console)
client.banmessage = config.banmessage;

function getDate() {
    let date = new Date();
    let year = date.getYear() + 1900; //Get current year
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; //Array of months
    let month = months[date.getMonth()]; // Get month index
    let day = date.getDate().toString().length < 2 ? "0" + date.getDate() : date.getDate(); //Get current day of month 1-30
    let hour = date.getHours().toString().length < 2 ? "0" + date.getHours() : date.getHours(); //Get current hour of the day
    let minute = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes(); //Get current minute of the hour
    let second = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds(); //Get current second of the minute
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second; //Return formatted string
}

console.log("------------------------------------------------");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error;
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const evt = require(`./events/${file}`);
        let evtName = file.split(".")[0];
        console.log(`Loaded event '${evtName}'`);
        client.on(evtName, evt.bind(null, client));
    });
    console.log("------------------------------------------------");
});

fs.readdir("./commands/", async (err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let cmdName = file.split(".")[0];
        console.log(`Loaded Command '${cmdName}'`);
        client.commands.set(cmdName, props);
    });
});

fs.readdir("./commands/dev/", async (err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/dev/${file}`);
        let cmdName = file.split(".")[0];
        console.log(`Loaded Command '${cmdName}'`);
        client.commands.set(cmdName, props);
    });
});

fs.readdir("./commands/authorised/", async (err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/authorised/${file}`);
        let cmdName = file.split(".")[0];
        console.log(`Loaded Command '${cmdName}'`);
        client.commands.set(cmdName, props);
    });
    console.log("------------------------------------------------");
});

process.on("unhandledRejection", (error) => {
    console.error("Unhandled promise rejection:", error);
});

client.login(config.token || process.env.TOKEN);