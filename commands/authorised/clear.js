/*
 *   Copyright (c) 2021 Bastian Leicht
 *   All rights reserved.
 *   https://bastianleicht.de/license
 */
// jshint esversion: 8

module.exports.run = async (client, message, args) => {
    message.delete().catch(()=> { });

    if(args[0] === 'all') {
        message.channel.bulkDelete(100).catch(()=>{});
    } else if(isNaN(args[0]) === false && args[0].length === 18) {
        let channel = message.content.split(" ")[1];
        message.guild.channels.cache.get(channel).bulkDelete(100).catch(() => { });
    } else if(args[0] !== null && args[0] !== ' ' && isNaN(args[0]) === true && args[0] !== 'all') {
        let channel = message.content.split(" ")[1];
        message.guild.channels.cache.find(x => x.name === channel).bulkDelete(100).catch(() => { });
    } else {
        message.channel.bulkDelete(100).catch(()=>{});
    }

};