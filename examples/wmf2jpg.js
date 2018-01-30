var async = require('async');
var path = require('path');
var debug = require('debug')('wmf');
var wmf = require('../index');
var sourceFile = path.join(__dirname, 'example.wmf');

async.parallel({
	defult: function (done) {
		wmf(sourceFile).toJPG(path.join(__dirname, 'example.jpg'), done);
	},
	w100: function (done) {
		wmf(sourceFile).width(100).toJPG(path.join(__dirname, 'example-w100.jpg'), done);
	},
	w200: function (done) {
		wmf(sourceFile).width(200).toJPG(path.join(__dirname, 'example-w200.jpg'), done);
	},
	h100: function (done) {
		wmf(sourceFile).height(100).toJPG(path.join(__dirname, 'example-h100.jpg'), done);
	},
	h200: function (done) {
		wmf(sourceFile).height(200).toJPG(path.join(__dirname, 'example-h200.jpg'), done);
	},
	w100h100: function (done) {
		wmf(sourceFile).width(100).height(100).toJPG(path.join(__dirname, 'example-w100-h100.jpg'), done);
	},
	w200h200: function (done) {
		wmf(sourceFile).size(200, 200).toJPG(path.join(__dirname, 'example-w200-h200.jpg'), done);
	},
	min: function (done) {
		wmf(sourceFile).min().toJPG(path.join(__dirname, 'example-min.jpg'), done);
	},
	max: function (done) {
		wmf(sourceFile).max().toJPG(path.join(__dirname, 'example-max.jpg'), done);
	}
}, function (err) {
	if (err) {
		debug(err);
	}
	process.exit(0);
});