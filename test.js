import test from 'ava';
import path from 'path';
import fs from 'fs';
import getRandomTweet from './index';
import cleanUpTweet from './utils';
import childProcess from 'child_process';

test('getRandomTweet', (t) => {
  t.plan(2);

  let tweets = JSON.parse(fs.readFileSync(path.join(__dirname, './tweets.json')));

  getRandomTweet()
    .then((tweet) => {
      t.same(typeof tweet, 'string');
      t.notSame(tweets.indexOf(tweet), -1);
    });
});

test('cleanUpTweet', (t) => {
  t.plan(1);

  let tweet = JSON.parse(fs.readFileSync(path.join(__dirname, './tweets.json')))[4];
  let cleanedUp = "Maybe the Net will be the place to eventually start a cyber-MTV with digital video and a massive \"video-server\"?\n - 93AUG";

  t.same(cleanUpTweet(tweet), cleanedUp);
})

test('cli', (t) => {
  t.plan(2);

  childProcess.execFile('./bin/wwwtxt', (err, stdout) => {
    t.same(typeof stdout, 'string');
  });

  childProcess.execFile('./bin/wwwtxt', ['--cow'], (err, stdout) => {
    t.notSame(stdout.indexOf('w', -1));
  });
});
