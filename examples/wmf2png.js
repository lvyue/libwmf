var async = require('async');
var path = require('path');
var debug = require('debug')('wmf');
var wmf = require('../index');
var sourceFile = path.join(__dirname, 'example.wmf');

async.parallel({
	defult: function (done) {
		wmf(sourceFile).toPNG(path.join(__dirname, 'example.png'), done);
	},
	w100: function (done) {
		wmf(sourceFile).width(100).toPNG(path.join(__dirname, 'example-w100.png'), done);
	},
	w200: function (done) {
		wmf(sourceFile).width(200).toPNG(path.join(__dirname, 'example-w200.png'), done);
	},
	h100: function (done) {
		wmf(sourceFile).height(100).toPNG(path.join(__dirname, 'example-h100.png'), done);
	},
	h200: function (done) {
		wmf(sourceFile).height(200).toPNG(path.join(__dirname, 'example-h200.png'), done);
	},
	w100h100: function (done) {
		wmf(sourceFile).width(100).height(100).toPNG(path.join(__dirname, 'example-w100-h100.png'), done);
	},
	w200h200: function (done) {
		wmf(sourceFile).size(200, 200).toPNG(path.join(__dirname, 'example-w200-h200.png'), done);
	},
	min: function (done) {
		wmf(sourceFile).min().toPNG(path.join(__dirname, 'example-min.png'), done);
	},
	max: function (done) {
		wmf(sourceFile).max().toPNG(path.join(__dirname, 'example-max.png'), done);
	}
}, function (err) {
	if (err) {
		debug(err);
	}
	process.exit(0);
});