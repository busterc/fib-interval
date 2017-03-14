'use strict';

var test = require('tap').test;

var fibInterval = require('./index');

test('runs from 0 to >50 and clears', t => {
  t.plan(1);
  var runner = fibInterval(function () {
    if (runner.delay() > 50) {
      t.pass();
      runner.clear();
    }
  }, [0, 1]);
});

test('no <delay> array was passed', t => {
  t.plan(1);
  try {
    var runner = fibInterval(function () {
      console.log(runner.delay());
      if (runner.delay() > 50) {
        runner.clear();
      }
    });
  } catch (error) {
    t.pass();
  }
});
