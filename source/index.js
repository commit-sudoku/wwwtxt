#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const tweets = JSON.parse(fs.readFileSync(path.join(__dirname, '../tweets.json'), 'utf-8'));

let random = tweets[Math.floor(Math.random() * tweets.length)];

let message = random.tweet.slice(0, random.tweet.indexOf('☯') - 1);
let date = random.tweet.slice(random.tweet.indexOf('☯') + 1);

console.log(message, '-', date);
