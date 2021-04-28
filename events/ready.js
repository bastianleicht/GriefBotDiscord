/*
 *   Copyright (c) 2021 Bastian Leicht
 *   All rights reserved.
 *   https://bastianleicht.de/license
 */
// jshint esversion: 8
const config = require("../config.json");
const start = Date.now();

module.exports = (client) => {
    console.log("Initialized in " + (Date.now() - start) + "ms");
    console.log(`Logged in as ${client.user.tag}!`);
};