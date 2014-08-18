# generator-umd

version: 0.1.0

[![Build Status](https://travis-ci.org/ruyadorno/generator-umd.svg?branch=master)](https://travis-ci.org/ruyadorno/generator-umd)

> An Yeoman Generator to create a basic [UMD](https://github.com/umdjs/umd) (Universal Module Definition) structure.


## Getting Started

### About

This script is an [Yeoman Generator](http://yeoman.io/), meant to be used with some modern Javascript tools such as [npm](https://www.npmjs.org) and [Bower](http://bower.io/).

### Information on the generated module

- The generated module will use the [returnExportsGlobal](https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js) definition from [UMD](https://github.com/umdjs/umd).

- It will provide support to both AMD([RequireJS](http://requirejs.org/)), [Node.js](http://nodejs.org/), [Browserify](http://browserify.org/) and global namespace definition.

- File definition for both **npm** and **Bower** package managers will be also generated along with the initial structure.

- A simple [Mocha](http://visionmedia.github.io/mocha/) test suit will be available with some dummy tests.


## Setup

You will need to have at least **npm** previously installed on your machine.

1) Install the [Yeoman CLI](https://github.com/yeoman/yo)

```shell
npm install -g yo
```

2) Install the UMD Generator

```shell
npm install -g generator-umd
```


## Generating your module

1) Open your terminal, navigate to an empty folder destined to your module:

```shell
mkdir new-module
cd new-module/
```

2) Run the generator:

```shell
yo umd
```

3) Input the required information, the generator will ask you:

- A module name
- A description to your module (optional)
- The repository URL for your module (optional)

4) You should be ready to go!

- Tests can be run using `npm test` command.
- Please do not remove the comments metadata from the generated js file, see reasoning below.


## Todo

### Support a way of easily adding dependencies

If you need to consume other libraries from inside your module, you will have to take a look at the [UMD spec](https://github.com/umdjs/umd/blob/master/returnExportsGlobal.js) and implement it by yourself.

I have plans to add this feature in a subgenerator, using the comment metadata from the generated module file.


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.


## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

