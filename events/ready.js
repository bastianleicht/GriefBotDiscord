/*
 *   Copyright (c) 2021 Bastian Leicht
 *   All rights reserved.
 *   https://bastianleicht.de/license
 */
// jshint esversion: 8
const config = require("../config.json");
const start = Date.now();

module.exports = (client) => {
    console.log(client.currentDate + " | Initialized in " + (Date.now() - start) + "ms");
    console.log(client.currentDate + ` | Logged in as ${client.user.tag}!`);
};