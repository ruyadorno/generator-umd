'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');


// ---


var UmdGenerator = yeoman.generators.Base.extend({

  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to UMD generator!'));

    var prompts = [{
      type: 'input',
      name: 'moduleName',
      message: 'What is your module name?'
    }];

    this.prompt(prompts, function (props) {
      this.moduleName = props.moduleName.trim();
      this.moduleDefinition = this.moduleName;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/templates');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('umd.js', this.moduleName + '.js');
  }
});

module.exports = UmdGenerator;

