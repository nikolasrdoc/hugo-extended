#!/usr/bin/env node

const spawn = require('child_process').spawn;
const hugo = require('.');
const input = process.argv.slice(2);

spawn(hugo, input, {stdio: 'inherit'})
  .on('exit', process.exit);
