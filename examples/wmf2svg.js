var async = require('async');
var path = require('path');
var debug = require('debug')('wmf');
var wmf = require('../index');
var sourceFile = path.join(__dirname, 'example.wmf');

async.parallel({
	defult: function (done) {
		wmf(sourceFile).toSVG(path.join(__dirname, 'example.svg'), done);
	},
	w100: function (done) {
		wmf(sourceFile).width(100).toSVG(path.join(__dirname, 'example-w100.svg'), done);
	},
	w200: function (done) {
		wmf(sourceFile).width(200).toSVG(path.join(__dirname, 'example-w200.svg'), done);
	},
	h100: function (done) {
		wmf(sourceFile).height(100).toSVG(path.join(__dirname, 'example-h100.svg'), done);
	},
	h200: function (done) {
		wmf(sourceFile).height(200).toSVG(path.join(__dirname, 'example-h200.svg'), done);
	},
	w100h100: function (done) {
		wmf(sourceFile).width(100).height(100).toSVG(path.join(__dirname, 'example-w100-h100.svg'), done);
	},
	w200h200: function (done) {
		wmf(sourceFile).size(200, 200).toSVG(path.join(__dirname, 'example-w200-h200.svg'), done);
	},
	min: function (done) {
		wmf(sourceFile).min().toSVG(path.join(__dirname, 'example-min.svg'), done);
	},
	max: function (done) {
		wmf(sourceFile).max().toSVG(path.join(__dirname, 'example-max.svg'), done);
	}
}, function (err) {
	if (err) {
		debug(err);
	}
	process.exit(0);
});