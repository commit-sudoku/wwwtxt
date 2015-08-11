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

if (argv.cow) {
  let output = monowrap(message + '\n - ' + date, {
    width: 30
  });

  console.log(cowsay.say({
    text: output
  }));
} else {
  let output = monowrap(message + '\n - ' + date, {
    width: 80
  });

  console.log(output);
}
