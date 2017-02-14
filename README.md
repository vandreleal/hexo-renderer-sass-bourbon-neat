# hexo-renderer-sass-bourbon-neat
[Sass] renderer plugin for [Hexo] with [Bourbon]/[Neat] support.

[![Build Status](https://travis-ci.org/vandreleal/hexo-renderer-sass-bourbon-neat.svg)](https://travis-ci.org/vandreleal/hexo-renderer-sass-bourbon-neat)
[![NPM Version](https://badge.fury.io/js/hexo-renderer-sass-bourbon-neat.svg)](http://badge.fury.io/js/hexo-renderer-sass-bourbon-neat)
[![NPM Dependencies](https://david-dm.org/vandreleal/hexo-renderer-sass-bourbon-neat.svg)](https://www.npmjs.com/package/hexo-renderer-sass-bourbon-neat)
[![Coverage Status](https://coveralls.io/repos/vandreleal/hexo-renderer-sass-bourbon-neat/badge.svg)](https://coveralls.io/r/vandreleal/hexo-renderer-sass-bourbon-neat)

## Install
```sh
$ npm install hexo-renderer-sass-bourbon-neat --save
```

## Usage
To enable [Bourbon]/[Neat] support you need to import it in your stylesheet.

``` scss
@import 'bourbon';
@import 'neat';
```

## Config
This renderer supports all [node-sass] settings. Check out the [node-sass docs] for all available options. Anything specified under the key `bourbon_neat` in your `_config.yml` files will
be passed to the `sass.render()` call.

### Example _config.yml
```yaml
bourbon_neat:
  outputStyle: compressed
  precision: 6
  imagePath: images
  sourceComments: none
  indentedSyntax: false
  omitSourceMapUrl: true
  sourceMap: true
  outFile: '',
  sourceMapEmbed: false
  sourceMapContents: false
```

### Inheritance
The config object passed to [node-sass] is constructed by merging properties from
the following locations using the order below:

1. Hardcoded Defaults (`{ outputStyle: 'nested', sourceComments: false }`)
2. Blog root `_config.yml`
3. Theme specific `_config.yml`

[Hexo]: http://hexo.io/
[Sass]: http://sass-lang.com/
[Bourbon]: http://bourbon.io/
[Neat]: http://neat.bourbon.io/
[node-sass]: https://github.com/sass/node-sass
[node-sass docs]: https://github.com/sass/node-sass#options