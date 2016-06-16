# iab-vast-model

[![npm](https://img.shields.io/npm/v/iab-vast-model.svg)](https://www.npmjs.com/package/iab-vast-model) [![Dependencies](https://img.shields.io/david/zentrick/iab-vast-model.svg)](https://david-dm.org/zentrick/iab-vast-model) [![Build Status](https://img.shields.io/travis/zentrick/iab-vast-model/master.svg)](https://travis-ci.org/zentrick/iab-vast-model) [![Coverage Status](https://img.shields.io/coveralls/zentrick/iab-vast-model/master.svg)](https://coveralls.io/r/zentrick/iab-vast-model) [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

Base classes for IAB VAST handling. Supports the full IAB VAST 3.0 specification.

To parse a tag into model objects, use
[iab-vast-parser](https://www.npmjs.com/package/iab-vast-parser).
To load and parse a chain of VAST files, use
[iab-vast-loader](https://www.npmjs.com/package/iab-vast-loader).

## Usage

```javascript
import {VAST} from 'iab-vast-model'

const vast = new VAST()
// ... Do your thing ...
```

## API

API documentation will be available soon. For now, you can easily build it
yourself by running `gulp doc` and opening `doc/index.html` in a Web browser.

Additionally, feel free to look at the source code. We recommend starting with
`src/index.js`, which should export all the classes you need.

## Maintainer

[Tim De Pauw](https://github.com/timdp)

## License

MIT