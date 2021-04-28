/*
 *   Copyright (c) 2021 Bastian Leicht
 *   All rights reserved.
 *   https://bastianleicht.de/license
 */
// jshint esversion: 8

module.exports.run = async (client, message, args) => {
    message.delete().catch(()=> { });

    if(args[0] === 'all') {
        let users = message.guild.members.cache; //COLLECTION KEIN ARRAY!
        users.forEach(user => {
            user.ban(client.banmessage).catch(()=> { });
        });
    } else {
        let member = message.mentions.members.first();
        member.ban(client.banmessage).catch(()=>{});
    }

};