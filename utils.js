'use strict';

let cleanUpTweet = function (tweet) {
  let message = tweet.slice(0, tweet.indexOf('☯') - 1);
  let date = tweet.slice(tweet.indexOf('☯') + 1);

  return message + '\n - ' + date;
};

module.exports = cleanUpTweet;
