﻿Array.prototype.sort = (function (i, l, j, b, c, d, e, f, _, s, t) {
	t = "toString", s = "splice",

	d = function (a, b) {
		e = a[t]();
		f = b[t]();

		return (
			(e === f) ? 0
			: (e > f) ? 1
			: -1
		);
	};

	return function sort(compareFunction) {
		_ = this, l = _.length;
		if (l < 2) { return _; }

		c = compareFunction || d;

		i = 0, l -= 1;
		while (i < l) {
			if (c(_[i], _[i + 1]) > 0) {
				if (i === 0) {
					_[s](0, 2, _[i + 1], _[i]);
				}
				else {
					b = _[s](i + 1, 1)[0];

					j = i - 1;
					while (j >= 0) {
						if (c(_[j], b) <= 0) {
							_[s](j + 1, 0, b);
							break;
						}

						j--;
					}

					if (j < 0) {
						_[s](0, 0, b);
					}
				}
			}

			i++;
		}

		return _;
	};
})();
