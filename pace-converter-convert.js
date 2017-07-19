#! /usr/bin/env node
/* eslint-disable no-console */
const program = require('commander');
const version = require('./package.json').version;
const convert = require('./src/convert');
const units = require('./src/units');

program
  .version(version)
  .option('-p, --pace <pace>', 'The pace (e.g.: "4:30")')
  .option('-u, --unit <unit>', `The unit (e.g.: "${units.MINKM}" | "${units.KMH}" | "${units.MINMI}")`)
  .parse(process.argv);

const pace = program.pace;
const unit = program.unit;

console.log(convert(pace, unit));
