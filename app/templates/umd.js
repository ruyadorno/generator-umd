(function (root, factory) {

  'use strict';

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
// UMD Definition above, do not remove this line

// To get to know more about the Universal Module Definition
// visit: https://github.com/umdjs/umd

  'use strict';

  var <%= moduleDefinition %> = function <%= moduleDefinition %>() {
    this.someProperty = 'value';
  };

  <%= moduleDefinition %>.prototype.someMethod = function (value) {
    return value + this.someProperty;
  };

  return <%= moduleDefinition %>;
}));
