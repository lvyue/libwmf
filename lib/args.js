/**
 * Extend proto
 */

module.exports = function (proto) {
	proto.width = function (width) {
		width = Number(width);
		if (isNaN(width) || width <= 0) { // invalid value
			delete this._options['--maxwidth'];
			this._options['--maxpect'] = 'on';
		} else {
			this._options['--maxwidth'] = width; // set width
			if (this._options['--maxheight']) {
				this._options['--maxsize'] = 'on';
				delete this._options['--maxpect'];
			} else {
				this._options['--maxpect'] = 'on';
			}
		}
		return this;
	};

	proto.height = function (height) {
		height = Number(height);
		if (isNaN(height) || height <= 0) { // invalid value
			delete this._options['--maxheight'];
			this._options['--maxpect'] = 'on';
		} else {
			this._options['--maxheight'] = height; // set width
			if (this._options['--maxwidth']) {
				this._options['--maxsize'] = 'on';
				delete this._options['--maxpect'];
			} else {
				this._options['--maxpect'] = 'on';
			}
		}
		return this;
	};

	proto.size = function (width, height) {
		return this.width(width).height(height);
	};

	proto.min = function () {
		this._options = {};
		return this;
	};
	proto.max = function () {
		this._options = {
			'--maxpect': 'on'
		};
		return this;
	};
};