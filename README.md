<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/alfredoperez/ngx-datacontext/master/demo/src/assets/logo.svg">
</p>

# ngx-datacontext - Data context service for Angular applications to easily create data services and link them to entities.

[![npm version](https://badge.fury.io/js/ngx-datacontext.svg)](https://badge.fury.io/js/ngx-datacontext),
[![Build Status](https://travis-ci.org/alfredoperez/ngx-datacontext.svg?branch=master)](https://travis-ci.org/alfredoperez/ngx-datacontext)
[![Coverage Status](https://coveralls.io/repos/github/alfredoperez/ngx-datacontext/badge.svg?branch=master)](https://coveralls.io/github/alfredoperez/ngx-datacontext?branch=master)
[![dependency Status](https://david-dm.org/alfredoperez/ngx-datacontext/status.svg)](https://david-dm.org/alfredoperez/ngx-datacontext)
[![devDependency Status](https://david-dm.org/alfredoperez/ngx-datacontext/dev-status.svg?branch=master)](https://david-dm.org/alfredoperez/ngx-datacontext#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/alfredoperez/ngx-datacontext.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://alfredoperez.github.io/ngx-datacontext

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-datacontext` via:
```shell
npm install --save ngx-datacontext
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-datacontext`:
```js
map: {
  'ngx-datacontext': 'node_modules/ngx-datacontext/bundles/ngx-datacontext.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { NgxDatacontextModule } from 'ngx-datacontext';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` NgxDatacontextModule .forRoot()`):
```js
import { NgxDatacontextModule } from 'ngx-datacontext';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxDatacontextModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` NgxDatacontextModule `:

```js
import { NgxDatacontextModule } from 'ngx-datacontext';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgxDatacontextModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2017 Alfredo Perez. Licensed under the MIT License (MIT)

