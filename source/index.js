#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import cowsay from 'cowsay';
import monowrap from 'monowrap';

const argv = require('yargs').argv;

const tweets = JSON.parse(fs.readFileSync(path.join(__dirname, '../tweets.json'), 'utf-8'));

let random = tweets[Math.floor(Math.random() * tweets.length)];

let message = random.tweet.slice(0, random.tweet.indexOf('☯') - 1);
let date = random.tweet.slice(random.tweet.indexOf('☯') + 1);

// Wrap text so it looks nice
let output = monowrap(message + '\n - ' + date, {
  width: 30
})

if (argv.cow) {
  console.log(cowsay.say({
    text: output
  }));
} else {
  console.log(output);
}
