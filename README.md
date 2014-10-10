contentstream
=======

[![Build Status](https://secure.travis-ci.org/node-modules/contentstream.png)](http://travis-ci.org/node-modules/contentstream)
[![Dependency Status](https://gemnasium.com/node-modules/contentstream.png)](https://gemnasium.com/node-modules/contentstream)

[![NPM](https://nodei.co/npm/contentstream.png?downloads=true&stars=true)](https://nodei.co/npm/contentstream/)

Make a readable stream by input content, content could be `String`, `Buffer`, `Object`, `Number` and so on.

## Install

```bash
$ npm install contentstream
```

## Usage

```js
var ContentStream = require('contentstream');

ContentStream({hello: 'json object', now: new Date()}).pipe(process.stdout);
ContentStream('hello string').pipe(process.stdout);
ContentStream(1024).pipe(process.stdout);
```

## License

(The MIT License)

Copyright (c) 2014 fengmk2 &lt;fengmk2@gmail.com&gt; and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
