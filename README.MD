# Ngx-DataContext
[![Build Status](https://travis-ci.org/alfredoperez/ngx-datacontext.svg?branch=master)](https://travis-ci.org/alfredoperez/ngx-datacontext)
[![codecov](https://codecov.io/gh/alfredoperez/ngx-datacontext/branch/master/graph/badge.svg)](https://codecov.io/gh/alfredoperez/ngx-datacontext)
[![npm version](https://badge.fury.io/js/ngx-datacontext.svg)](http://badge.fury.io/js/ngx-datacontext)
[![devDependency Status](https://david-dm.org/alfredoperez/ngx-datacontext/dev-status.svg)](https://david-dm.org/alfredoperez/ngx-datacontext?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/alfredoperez/ngx-datacontext.svg)](https://github.com/alfredoperez/ngx-datacontext/issues)
[![GitHub stars](https://img.shields.io/github/stars/alfredoperez/ngx-datacontext.svg)](https://github.com/alfredoperez/ngx-datacontext/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/alfredoperez/ngx-datacontext/master/LICENSE)

## Demo
https://alfredoperez.github.io/ngx-datacontext/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Tools to easily create a datacontext for different types of server

## Installation

Install through npm:
```
npm install --save ngx-datacontext
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { NgxDatacontextModule } from 'ngx-datacontext';

@NgModule({
  imports: [
    NgxDatacontextModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/alfredoperez/ngx-datacontext/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ngx-datacontext/bundles/ngx-datacontext.umd.js"></script>
<script>
    // everything is exported ngxDatacontext namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://alfredoperez.github.io/ngx-datacontext/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and [yarn](https://yarnpkg.com/en/docs/install)
* Install local dev dependencies: `yarn` while current directory is this repo

### Development server
Run `yarn start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `yarn test` to run tests once or `yarn run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
yarn run release
```

## License

MIT
