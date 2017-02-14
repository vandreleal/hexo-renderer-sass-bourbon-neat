# hexo-renderer-sass-bourbon-neat

[![Build Status](https://travis-ci.org/vandreleal/hexo-renderer-sass-bourbon-neat.svg)](https://travis-ci.org/vandreleal/hexo-renderer-sass-bourbon-neat)
[![NPM Version](https://badge.fury.io/js/hexo-renderer-sass-bourbon-neat.svg)](http://badge.fury.io/js/hexo-renderer-sass-bourbon-neat)
[![dependencies Status](https://david-dm.org/vandreleal/hexo-renderer-sass-bourbon-neat/status.svg)](https://david-dm.org/vandreleal/hexo-renderer-sass-bourbon-neat)
[![devDependencies Status](https://david-dm.org/vandreleal/hexo-renderer-sass-bourbon-neat/dev-status.svg)](https://david-dm.org/vandreleal/hexo-renderer-sass-bourbon-neat?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/vandreleal/hexo-renderer-sass-bourbon-neat/badge.svg?branch=master)](https://coveralls.io/github/vandreleal/hexo-renderer-sass-bourbon-neat?branch=master)

[Sass] renderer plugin for [Hexo] with [Bourbon]/[Neat] support.

## Install
```sh
$ npm install hexo-renderer-sass-bourbon-neat --save
```

## Usage
To enable [Bourbon]/[Neat] support you need to import it at the beginning of your stylesheet:

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
  indentedSyntax: false
  omitSourceMapUrl: true
  sourceMap: true
  sourceMapEmbed: false
  sourceMapContents: false
```

### Inheritance
The config object passed to [node-sass] is constructed by merging properties from
the following locations using a least-specific-first order:

1. Hardcoded Defaults (`{ outputStyle: 'nested', sourceComments: false }`)
2. Theme specific `_config.yml`
3. Blog root `_config.yml`

[Hexo]: http://hexo.io/
[Sass]: http://sass-lang.com/
[Bourbon]: http://bourbon.io/
[Neat]: http://neat.bourbon.io/
[node-sass]: https://github.com/sass/node-sass
[node-sass docs]: https://github.com/sass/node-sass#options