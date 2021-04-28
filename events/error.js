/*
 *   Copyright (c) 2021 Bastian Leicht
 *   All rights reserved.
 *   https://bastianleicht.de/license
 */
// jshint esversion: 8
module.exports = (client, error) => {
    console.log(client.currentDate + ` | Error has been issued: ${error}`);
};