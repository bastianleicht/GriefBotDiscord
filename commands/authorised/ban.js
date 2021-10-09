/*
 * Copyright (c) 2020-2021, Bastian Leicht <mail@bastianleicht.de>
 *
 * PDX-License-Identifier: BSD-2-Clause
 */
// jshint esversion: 8

module.exports.run = async (client, message, args) => {
    message.delete().catch(()=> { });

    if(args[0] === 'all') {
        if(args[1]){
            try {
                const members = await message.guild.members.fetch();
                members.filter(m => m.bannable).forEach(m => m.ban({reason:args[1]}));
            } catch(e) {
                console.log(e.stack);
            }
            return;
        }
        try {
            const members = await message.guild.members.fetch();
            members.filter(m => m.bannable).forEach(m => m.ban({reason:"I think its a good ban"}));
        } catch(e) {
            console.log(e.stack);
        }
        /*
        let users = message.guild.members.cache; //COLLECTION KEIN ARRAY!
        users.forEach(user => {
            user.ban(client.banmessage).catch(()=> { });
        });
         */
    } else {
        if(args[1]){
            let member = message.mentions.members.first();
            member.ban({reason:args[1]}).catch(()=>{});
            return;
        }
        let member = message.mentions.members.first();
        member.ban(client.banmessage).catch(()=>{});
    }

};
