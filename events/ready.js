/*
 * Copyright (c) 2020-2021, Bastian Leicht <mail@bastianleicht.de>
 *
 * PDX-License-Identifier: BSD-2-Clause
 */
// jshint esversion: 8
const config = require("../config.json");
const start = Date.now();

module.exports = (client) => {
    console.log(client.currentDate + " | Initialized in " + (Date.now() - start) + "ms");
    console.log(client.currentDate + ` | Logged in as ${client.user.tag}!`);
};