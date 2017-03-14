(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.fibInterval = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = function (fn, delay) {
  if (Object.prototype.toString.call(delay) !== '[object Array]' || delay.length < 2) {
    throw new Error('<delay> must be an Array with 2 values');
  }

  var run = true;
  var when = delay;
  var instance;

  delay = when[0];

  return (function fibInterval(_fn, _delay) {
    instance = setTimeout(function () {
      _fn();
      var next = when[0] + when[1];
      when.shift();
      when.push(next);
      if (run === true) {
        fibInterval(_fn, when[0]);
      }
    }, _delay);

    return {
      clear: function () {
        clearTimeout(instance);
        run = false;
        when = [];
      },
      delay: function () {
        return when[0];
      }
    };
  })(fn, delay);
};

},{}]},{},[1])(1)
});