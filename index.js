'use strict';
const fs = require('fs');
const path = require('path');

let getRandomTweet = function () {
  let tweetsPath = path.join(__dirname, './tweets.json');

  return new Promise((resolve, reject) => {
    fs.readFile(tweetsPath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }

      let tweets = JSON.parse(data);

      resolve(tweets[Math.floor(Math.random() * tweets.length)]);
    });
  });
};

module.exports = getRandomTweet;
