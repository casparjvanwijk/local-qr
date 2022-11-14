#!/usr/bin/env node

import ip from "ip";
import QRCode from "qrcode";

const DEFAULT_PORT = 3000;

const argPort = process.argv[2];
const port = argPort || DEFAULT_PORT;
const ipAddress = ip.address();
const url = `http://${ipAddress}:${port}`;
const QR = await QRCode.toString(url);

console.log(`QR code for ${url}:`);
console.log(QR);

process.exit();
