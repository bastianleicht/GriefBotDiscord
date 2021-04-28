/*
 * Copyright (c) 2020-2021, Bastian Leicht <mail@bastianleicht.de>
 *
 * PDX-License-Identifier: BSD-2-Clause
 */
// jshint esversion: 8
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    message.delete().catch(()=> { });

    let msg = message.content.split(' ').slice(1).join(' ');
    let members = message.guild.members.cache.array();
    let count = members.length;
    let bots = 0;
    let success = 0;

    if(!msg || msg.length <= 1) {
        const embed = new Discord.MessageEmbed()
            .setTitle(':x: Fehler')
            .setDescription('Du hast leider die zu sendende Nachricht vergessen.')
            .setTimestamp();
        await message.author.send(embed);
        return;
    }

    console.log(client.currentDate + ` | Antwort an ${message.author.username} : Sende Nachrichten an alle '${count}' User von '${message.guild.name}'.`);

    for (let i = 0; i < count; i++) {
        let member = members[i];
        if (member.user.bot) {
            console.log(client.currentDate + ` | Überspringe Bot '${member.user.username}'`);
            bots++;
            continue;
        }

        let timeout = Math.floor((Math.random() * (client.config.wait - 0.01)) * 1000) + 10;
        await sleep(timeout);

        if(i === (count - 1)) {
            console.log(client.currentDate + ` | Wartete ${timeout}ms. Schreibe '${member.user.username}' eine Nachricht!`);
        } else {
            console.log(client.currentDate + ` | Wartete ${timeout}ms.\t|${i + 1}|\tSchreibe '${member.user.username}' eine Nachricht!1`);
        }

        try {
            member.send(`${msg} \n\nTime: ${timeout}ms`);
            success++;
        } catch (error) {
            console.log(client.currentDate + ` | Fehler: Konnte keine Nachricht schreiben! ` + error);
        }
    }
    console.log(client.currentDate + ` | Sendete ${success} ${(success !== 1 ? `Nachrichten` : `Nachricht`)} erfolgreich, ` +
        `${bots} ${(bots !== 1 ? `Bots wurden` : `Bot wurde`)} übersprungen.`);

};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}