/**
 * Module dependencies.
 */

var spawn = require('cross-spawn');
var debug = require('debug')('wmf');

/**
 * Extend proto
 */

module.exports = function (proto) {

	/**
	 * Execute the command and write the image to the specified file name.
	 *
	 * @param {String} name
	 * @param {Function} callback
	 */

	proto.toJPG = function toJPG() {
		var self = this;
		self._subCommand = 'wmf2gd';
		self._options['-t'] = 'jpeg';
		self._write.apply(this, arguments);
	};

	/**
	 * Execute the command and write the image to the specified file name.
	 *
	 * @param {String} name
	 * @param {Function} callback
	 */
	proto.toPNG = function toPNG() {
		var self = this;
		self._subCommand = 'wmf2gd';
		self._options['-t'] = 'png';
		self._write.apply(this, arguments);
	};

	/**
	 * Execute the command and write the image to the specified file name.
	 *
	 * @param {String} name
	 * @param {Function} callback
	 */
	proto.toSVG = function toSVG() {
		var self = this;
		self._subCommand = 'wmf2svg';
		delete self._options['-t'];
		self._write.apply(this, arguments);
	};

	/**
	 * Execute the command and write the image to the specified file name.
	 *
	 * @param {String} name
	 * @param {Function} callback
	 * @return {Object} wmf
	 */

	proto._write = function write(name, cb) {
		if (!cb) cb = name, name = null;

		if ('function' !== typeof cb) {
			throw new TypeError('wmf expects a callback function');
		}

		if (!name) {
			return cb(TypeError('wmf expects a filename when writing new files'));
		}
		this._options['-o'] = name;
		var self = this,
			bin = self._subCommand,
			args = self.args(),
			cmd = bin + '  ' + args.join('  '),
			proc, err, stdout = '',
			stderr = '';
		debug(cmd);
		try {
			proc = spawn(bin, args);
		} catch (e) {
			return cb(e);
		}
		proc.stdin.once('error', cb);

		proc.on('error', function (err) {
			if (err.code === 'ENOENT') {
				cb(new Error('Could not execute libwmf: ' + cmd + ' this most likely means the wmf2gd/wmf2svg binaries can\'t be found'));
			} else {
				cb(err);
			}
		});
		proc.stdout.on('data', function (data) {
			stdout += data;
		});

		proc.stderr.on('data', function (data) {
			stderr += data;
		});

		proc.on('close', function (code, signal) {
			if (code !== 0 || signal !== null) {
				err = new Error('Command failed: ' + stderr);
				err.code = code;
				err.signal = signal;
			}
			cb(err, stdout, stderr, cmd);
			stdout = stderr = null;
		});
	};

	/**
	 * Returns arguments to be used in the command.
	 *
	 * @return {Array}
	 */

	proto.args = function args() {
		var self = this,
			_args = [],
			_options = self._options;

		if (_options['-t']) {
			_args.push('-t');
			_args.push(_options['-t']);
		}
		if (_options['-o']) {
			_args.push('-o');
			_args.push(_options['-o']);
		}
		if (_options['--maxwidth']) {
			_args.push('--maxwidth=' + _options['--maxwidth']);
		}
		if (_options['--maxheight']) {
			_args.push('--maxheight=' + _options['--maxheight']);
		}
		if (_options['--maxpect']) {
			_args.push('--maxpect');
		}
		if (_options['--maxsize']) {
			_args.push('--maxsize');
		}
		return [].concat(_args, self.source); // remove falsey
	};
};