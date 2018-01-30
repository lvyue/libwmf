# wmf  
Using libwmf to chang *.wmf file to JPG,PNG,SVG files .

## Getting started  
First download and install [libwmf](http://wvware.sourceforge.net/libwmf.html).  

In Ubuntu/Debian:
```sh
sudo apt-get install libwmf-bin 
```

In Cent OS / RedHat / Fedora :
```sh
yum install libwmf
```  

In Mac OS X, you can simply use Homebrew and do:  
```sh  
brew install libwmf
```  
then either use npm:  
```sh
npm install libwmf --save
```  
or clone the repo:  
```sh
git clone https://github.com/lvyue/libwmf.git
```  

## Basic Usage  
```js 
var wmf = require('wmf');

// convert to jpg
wmf('/path/to/my/demo.wmf')
.toJPG('/path/to/my/demo.jpg',function (err) {
    if (!err) console.log('done');
});
// set dest file width
wmf('/path/to/my/demo.wmf')
.with(100)
.toJPG('/path/to/my/demo.jpg',function (err) {
    if (!err) console.log('done');
});

// set dest file height
wmf('/path/to/my/demo.wmf')
.height(100)
.toJPG('/path/to/my/demo.jpg',function (err) {
    if (!err) console.log('done');
});

// set dest file size
wmf('/path/to/my/demo.wmf')
.size(100,100)
.toJPG('/path/to/my/demo.jpg',function (err) {
    if (!err) console.log('done');
});

```  

## Methods  
- configurations 
  - width()- set dest file width  
  - height() set dest file height  
  - size() set dest file width and height
  - min() Clear the previous configuration, using the default settings  
  - max() Clear the previous configuration to generate the original scale image  
- image output
  - toJPG - convert to JPG Image  
  - toPNG - convert to PNG Image  
  - toSVG - convert to SVG Image

## License
MIT License

Copyright (c) 2018 Yue Lv

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

