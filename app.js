"use strict"

var JPEGDecoder = require('jpg-stream/decoder');
var concat = require('concat-frames');
var fs = require('fs')

//your image location here
var myImage = './files/IMG_0128.JPG'

// decode a JPEG file to RGB pixels
fs.createReadStream(myImage)
  .pipe(new JPEGDecoder)
  .on('meta', function(meta) {
    // meta contains an exif object as decoded by
    // https://github.com/devongovett/exif-reader
    console.log(meta)
  })
  .pipe(concat(function(frames) {
    // frames is an array of frame objects (one for JPEGs)
    // each element has a `pixels` property containing
    // the raw RGB pixel data for that frame, as
    // well as the width, height, etc.
  }));