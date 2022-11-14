#!/usr/bin/env node

import * as readline from "node:readline/promises";
import ip from "ip";
import QRCode from "qrcode";

const DEFAULT_PORT = 3000;

var rl = readline.createInterface(process.stdin, process.stdout);

const port =
  (await rl.question(
    `On which port is your application running (default: ${DEFAULT_PORT})?`
  )) || DEFAULT_PORT;

const ipAddress = ip.address();

const url = `http://${ipAddress}:${port}`;

const QR = await QRCode.toString(url, { type: "terminal" });

console.log(`\nQRCode for ${url}:`);
console.log(QR);

process.exit();
