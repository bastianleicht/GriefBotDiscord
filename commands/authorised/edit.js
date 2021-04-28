/*
 *   Copyright (c) 2021 Bastian Leicht
 *   All rights reserved.
 *   https://bastianleicht.de/license
 */
// jshint esversion: 8

module.exports.run = async (client, message, args) => {
    message.delete().catch(()=> { });

    if(args[0] === 'all' && args[1] === 'channels') {
        let name = message.content.split(" ")[3];
        let channels = message.guild.channels.cache;
        channels.forEach(channel => {
            channel.setName(name).catch(() => { });
        });
    } else if(args[0] === 'all' && args[1] === 'roles') {
        let name = message.content.split(" ")[3];
        let roles = message.guild.roles.cache;
        roles.forEach(role=>{
            role.setName(name).catch(() => { });
        });
    } else if(args[0] === 'channel') {
        let channel = message.content.split(" ")[2];
        let name = message.content.split(" ")[3];
        message.guild.channels.cache.find(x => x.name === channel).setName(name).catch(() => { });
    } else if(args[0] === 'role') {
        let role = message.content.split(" ")[2];
        let name = message.content.split(" ")[3];
        message.guild.roles.cache.find(x => x.name === role).setName(name).catch(() => { });
    }

};