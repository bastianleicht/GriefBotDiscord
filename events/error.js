/*
 * Copyright (c) 2020-2021, Bastian Leicht <mail@bastianleicht.de>
 *
 * PDX-License-Identifier: BSD-2-Clause
 */
// jshint esversion: 8
module.exports = (client, error) => {
    console.log(client.currentDate + ` | Error has been issued: ${error}`);
};