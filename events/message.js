/*
 *   Copyright (c) 2021 Bastian Leicht
 *   All rights reserved.
 *   https://bastianleicht.de/license
 */
// jshint esversion: 8
const { prefix } = require('../config.json');

function getFromArray(array, data) {
    let confirmed = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === data) confirmed = true;
    }
    return confirmed;
}

module.exports = (client, message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if (!cmd) return;

    if(command !== 'auth' && getFromArray(client.initializedUsers, message.author.id) === true) {
        console.log(client.currentDate + " | " + message.author.username + "#" + message.author.discriminator + " hat gerade den " + command + " Command genutzt!");
        cmd.run(client, message, args, command);

    } else if(command === 'auth') {
        cmd.run(client, message, args, command);
    }

};