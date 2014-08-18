/*global describe, beforeEach, it */
'use strict';

var path = require('path');
var yo = require('yeoman-generator');
var exec = require('child_process').exec;


// ---


describe('umd generator', function () {

  beforeEach(function (done) {
    yo.test.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = yo.test.createGenerator('umd:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });


  // ---


  it('creates expected files', function (done) {

    var expected = [
      '.jshintrc',
      '.editorconfig',
      'bower.json',
      'package.json',
      'README.md',
      'somename.js',
      'test/somenameSpec.js'
    ];

    yo.test.mockPrompt(this.app, {
      'moduleName': 'somename'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      yo.assert.file(expected);
      done();
    });
  });


  // ---


  it('prompted options are correctly used', function (done) {

    yo.test.mockPrompt(this.app, {
      'moduleName': 'Super module yay',
      'description': 'bla bla bla',
      'repository': 'https://github.com/ruyadorno/generator-umd.git'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      yo.assert.fileContent('package.json', /super\-module\-yay/);
      yo.assert.fileContent('package.json', /bla\ bla\ bla/);
      yo.assert.fileContent('package.json', /github\.com/);
      done();
    });
  });


  // ---


  it('should be able to access module properties', function (done) {

    yo.test.mockPrompt(this.app, {
      'moduleName': 'somename'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {

      var filename = process.cwd() + '/somename.js';
      var Mymodule = require(filename);
      var myinstance = new Mymodule();

      yo.assert.textEqual(myinstance.someProperty, 'value');
      done();
    });
  });


  // ---


  it('should be able to access module methods', function (done) {

    yo.test.mockPrompt(this.app, {
      'moduleName': 'somename'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {

      var filename = process.cwd() + '/somename.js';
      var Mymodule = require(filename);
      var myinstance = new Mymodule();

      yo.assert.textEqual(myinstance.someMethod('hello '), 'hello value');
      done();
    });
  });


  // ---


  it('should be able to run tests on generated module', function (done) {

    yo.test.mockPrompt(this.app, {
      'moduleName': 'somename'
    });

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {

      exec('npm test', {}, function execDone(err, stdout, stderr) {

        if (err) {
          yo.assert.fail(1, 0, stderr);
        }

        console.log(stdout);

        done();
      });
    });
  });
});

