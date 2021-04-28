/*
 *   Copyright (c) 2021 Bastian Leicht
 *   All rights reserved.
 *   https://bastianleicht.de/license
 */
// jshint esversion: 8
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    message.delete().catch(()=> { });

    switch (args[0]) {
        case 'channels':
            let channels = message.guild.channels.cache;
            channels.forEach(channel => {
                channel.delete().catch(() => { });
            });
            break;
        case 'roles':
            let roles = message.guild.roles.cache;
            message.guild.roles.cache.forEach(role => {
                role.delete().catch(console.error);
            });
            break;
        case 'channel':
            let channel = message.content.split(" ")[2];
            if(channel === null || channel === ' ') {
                message.guild.channels.cache.find(x => x.name === message.channel.name).delete().catch(() => { });
            } else {
                message.guild.channels.cache.find(x => x.name === channel).delete().catch(() => { });
            }
            break;
        case 'role':
            let role = message.content.split(" ")[2];
            message.guild.roles.cache.find(x => x.name === role).delete().catch(() => { });
            break;
    }

};