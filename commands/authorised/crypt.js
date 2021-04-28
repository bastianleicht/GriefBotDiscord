/*
 *   Copyright (c) 2021 Bastian Leicht
 *   All rights reserved.
 *   https://bastianleicht.de/license
 */
// jshint esversion: 8

module.exports.run = async (client, message, args) => {
    message.delete().catch(()=> { });

    let min = 50;   //Minimale länge des Strings
    let max = 200;  //Maximale länge des Strings

    function generateString() {
        let result = ' ';
        const charactersLength = client.unicodeText.length;
        for ( let i = 0; i < Math.floor(Math.random() * (max - min + 1)) + min; i++ ) {
            result += client.unicodeText.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    if(args[0] === 'all' && args[1] === 'channels') {
        let channels = message.guild.channels.cache;
        channels.forEach(channel => {
            channel.setName(generateString()).catch(() => { });
        });

    } else if(args[0] === 'all' && args[1] === 'roles') {
        let roles = message.guild.roles.cache;
        roles.forEach(role => {
            role.setName(generateString()).catch(() => { });
        });
    } else if(args[0] === 'channel') {
        let channel = message.content.split(" ")[2];
        message.guild.channels.cache.find(x => x.name === channel).setName(generateString()).catch(() => { });
    } else if(args[0] === 'role') {
        let role = message.content.split(" ")[2];
        message.guild.roles.cache.find(x => x.name === role).setName(generateString()).catch(() => { });
    }

};