#!/usr/bin/env node

console.log("hello");
import * as readline from "node:readline/promises";

const DEFAULT_PORT = 3000;

var rl = readline.createInterface(process.stdin, process.stdout);
const port =
  (await rl.question(
    `On which port is your application running (default: ${DEFAULT_PORT})?`
  )) || DEFAULT_PORT;

// TODO:
// Get local ip
// Create link (ip:port)
// Create QR
// Output QR
