#! /usr/bin/env node
const convert = require('./src/convert');
const units = require('./src/units');

const args = process.argv.slice(2);
const pace = args[0];
const unit = args[1] || units.MINKM;

console.log(convert(pace, unit)); // eslint-disable-line
