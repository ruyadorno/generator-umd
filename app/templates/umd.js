(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.returnExportsGlobal = factory();
  }

}(this, function () {

  'use strict';

  function <%= moduleDefinition %>() {
    this.someProperty = 'value';
  }

  <%= moduleDefinition %>.prototype.someMethod = function(value) {
    return value + this.someProperty;
  };

  return <%= moduleDefinition %>;
}));
