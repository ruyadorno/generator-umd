'use strict';

var toCamelCase = require('to-camel-case');
var toSlugCase = require('to-slug-case');
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


  // ---


  askFor: function () {

    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the Javascript UMD (Universal Module Definition) generator!'));

    var prompts = [{
      type: 'input',
      name: 'moduleName',
      message: 'What is your module name?'
    }, {
      type: 'input',
      name: 'description',
      message: 'Give a brief description about your module:',
      default: ''
    }, {
      type: 'input',
      name: 'repository',
      message: 'Does it already have a repository? Provide the URL if that is the case:',
      default: ''
    }];

    // Register required data from answers
    this.prompt(prompts, function (props) {

      this.moduleName = toSlugCase(props.moduleName.trim());
      this.moduleDefinition = toCamelCase(this.moduleName);
      this.description = props.description.trim();
      this.repository = props.repository.trim();

      done();
    }.bind(this));
  },


  // ---


  app: function () {

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');

  },


  // ---


  projectfiles: function () {

    this.mkdir('test');

    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('README.md', 'README.md');
    this.copy('umd.js', this.moduleName + '.js');
    this.copy('test/umdSpec.js', 'test/' + this.moduleName + 'Spec.js');

  }
});

module.exports = UmdGenerator;

