/*
 * Copyright (c) 2020-2021, Bastian Leicht <mail@bastianleicht.de>
 *
 * PDX-License-Identifier: BSD-2-Clause
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