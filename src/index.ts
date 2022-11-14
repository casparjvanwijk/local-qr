#!/usr/bin/env node

import * as readline from "node:readline/promises";
import ip from "ip";

const DEFAULT_PORT = 3000;

var rl = readline.createInterface(process.stdin, process.stdout);

const port =
  (await rl.question(
    `On which port is your application running (default: ${DEFAULT_PORT})?`
  )) || DEFAULT_PORT;

const ipAddress = ip.address();

const url = `https://${ipAddress}:${port}`;

console.log("url", url);

// TODO:
// Create QR
// Output QR
