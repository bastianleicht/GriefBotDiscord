/*
 * Copyright (c) 2020-2021, Bastian Leicht <mail@bastianleicht.de>
 *
 * PDX-License-Identifier: BSD-2-Clause
 */
// jshint esversion: 8
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    message.delete().catch(()=> { });

    if(args[0] === 'all') {
        let users = message.guild.members; //COLLECTION KEIN ARRAY!
        users.forEach(user => {
            user.kick().catch(() => { });
        });
    } else {
        let member = message.mentions.members.first();
        member.kick().catch(() => { });
    }

};