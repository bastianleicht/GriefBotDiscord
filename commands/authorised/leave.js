/*
 *   Copyright (c) 2021 Bastian Leicht
 *   All rights reserved.
 *   https://bastianleicht.de/license
 */
// jshint esversion: 8

module.exports.run = async (client, message, args) => {
    message.delete().catch(()=> { });

    message.guild.leave();

};