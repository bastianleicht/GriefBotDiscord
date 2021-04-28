/*
 * Copyright (c) 2020-2021, Bastian Leicht <mail@bastianleicht.de>
 *
 * PDX-License-Identifier: BSD-2-Clause
 */
// jshint esversion: 8

module.exports.run = async (client, message, args) => {
    message.delete().catch(()=> { });

    let min = 20;   //Minimale länge des Strings
    let max = 200;  //Maximale länge des Strings

    function generateString() {
        let result = ' ';
        const charactersLength = client.unicodeText.length;
        for ( let i = 0; i < Math.floor(Math.random() * (max - min + 1)) + min; i++ ) {
            result += client.unicodeText.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    let i = 0;

    while (i < args[0]) {
        try {
            await message.guild.roles.create ({
                data: {
                    name: generateString(),
                    color: "#363940",
                    permissions: []
                }

            });
        } catch(e) {
            console.log(e.stack);
        }
        i++;

    }

};