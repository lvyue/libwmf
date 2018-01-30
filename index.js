/**
 * Module dependencies.
 */

var EventEmitter = require('events').EventEmitter;
var util = require('util');

util.inherits(wmf, EventEmitter);

/**
 * Constructor.
 *
 * @param {String} path - path to wmf source 
 */

function wmf(source) {

	if (!(this instanceof wmf)) {
		return new wmf(source);
	}

	EventEmitter.call(this);

	this.source = source;
	this._options = {};
	this._args = [];
	this._subCommand = 'wmf2gd';
}

/**
 * Subclasses the wmf constructor with custom options.
 *
 * @param {options} options
 * @return {wmf} the subclasses wmf constructor
 */

var parent = wmf;
wmf.subClass = function subClass(options) {
	function wmf(source) {
		if (!(this instanceof parent)) {
			return new wmf(source);
		}

		parent.call(this, source);
	}

	wmf.prototype.__proto__ = parent.prototype;
	wmf.prototype._options = {};
	console.log(options);
	return wmf;
};

/**
 * Auwmfent the prototype.
 */

require('./lib/args')(wmf.prototype);
require('./lib/command')(wmf.prototype);

/**
 * Expose.
 */

module.exports = exports = wmf;
module.exports.version = require('./package.json').version;