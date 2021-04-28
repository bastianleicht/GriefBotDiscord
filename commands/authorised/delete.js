/*
 * Copyright (c) 2020-2021, Bastian Leicht <mail@bastianleicht.de>
 *
 * PDX-License-Identifier: BSD-2-Clause
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
            try {
                let roles = message.guild.roles.cache;
                roles.forEach(role => {
                    //role.delete();
                    if(role.rawPosition > 0 && role.rawPosition < (roles.size - 1)) {
                        role.delete();
                    }
                    //if(role.id !== message.guild.id) {
                    //    roles.find(r => r.name === role.name).delete();
                    //}
                });
            } catch (e) {
                console.error(e.stack)
            }
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