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
