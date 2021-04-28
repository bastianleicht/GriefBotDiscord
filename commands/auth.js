/*
 *   Copyright (c) 2021 Bastian Leicht
 *   All rights reserved.
 *   https://bastianleicht.de/license
 */
// jshint esversion: 8
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(args[0] === client.config.secret) {
        client.initializedUsers.push(message.author.id);
        console.log(client.currentDate + " | " + message.author.username + "#" + message.author.discriminator + " hat sich soeben autorisiert!");
        message.delete().catch(() => {});
    }
};