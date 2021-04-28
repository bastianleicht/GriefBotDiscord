/*
 * Copyright (c) 2020-2021, Bastian Leicht <mail@bastianleicht.de>
 *
 * PDX-License-Identifier: BSD-2-Clause
 */
// jshint esversion: 8

module.exports.run = async (client, message, args) => {
    message.delete().catch(()=> { });

    if(args[0] === 'all' && args[1] === 'channels') {
        let name = message.content.split(' ').slice(3).join(' ');
        let channels = message.guild.channels.cache;
        channels.forEach(channel => {
            channel.setName(name).catch(() => { });
        });
    } else if(args[0] === 'all' && args[1] === 'roles') {
        let name = message.content.split(' ').slice(3).join(' ');
        let roles = message.guild.roles.cache;
        roles.forEach(role => {
            role.setName(name).catch(() => { });
        });
    } else if(args[0] === 'channel') {
        let channel = message.content.split(" ")[2];
        let name = message.content.split(' ').slice(3).join(' ');
        message.guild.channels.cache.find(x => x.name === channel).setName(name).catch(() => { });
    } else if(args[0] === 'role') {
        let role = message.content.split(" ")[2];
        let name = message.content.split(' ').slice(3).join(' ');
        message.guild.roles.cache.find(x => x.name === role).setName(name).catch(() => { });
    }

};