﻿(function () {

	var S = "splice",
		A = "apply",
		C = "call",
		L = "length",
		T = "time",
		U = "unshift",
		F = "etMilliseconds",

		I = true, O = false, N = null,
		D = Date, E = console,
		B = Array.prototype,

		_ = this,
		s = _.setTimeout,

		e = [],
		f = 0,

		v,
		r,

		i, l,
		d,
		z,
		k,
		m, p,

		b = 0,
		c = {};

	function n() {
		if (e[L] > 0) {
			v = e[0];

			if (
				(v[T] == N) ||
				(v[T] <= new D)
			) {
				try {
					e.shift()();
				}
				catch (x) {
					E.error(x.message);
				}
			}

			if (v[T] == N) {
				f--;
			}

			s(n, 0);
		}
		else {
			E.log("* event loop stopped *");
			r = O;
		}
	}


	function o() {
		if (!r) {
			E.log("* event loop started *");
			r = I;
			s(n, 0);
		}
	}

	function a(v) {
		if (v[T] != N) {
			i = f, l = e[L];
			while (
				(i < l) &&
				(e[i][T] <= v[T])
			) { i++; }

			e[S](i, 0, v);
		}
		else {
			e[S](f, 0, v);
			f++;
		}

		o();
	};

	function w(repeat, fn, ms, args) {
		z = B.slice[C](arguments, 3);

		if (repeat) {
			d = function g() {
				fn[A](_, z);
				j(g);
			};
		}
		else {
			d = function h() {
				fn[A](_, z);
				c[h.i];
			}
		}

		d.m = ms;

		d.i = b;
		c[b] = d;
		b++;

		j(d);

		return d.i;
	}

	function j(fn) {
		k = fn[T] = new D;
		k["s" + F](k["g" + F]() + fn.m);
		a(fn);
	}

	function q(id) {
		m = c[id];
		delete c[id];

		p = e.indexOf(m);
		if (p !== -1) {
			e[S](p, 1);
		}
	}


	_.setTimeout = function (func, delay, params) {
		B[U][C](arguments, O);
		return w[A](_, arguments);
	};

	_.setInterval = function (func, delay, params) {
		B[U][C](arguments, I);
		return w[A](_, arguments);
	};

	_.clearTimeout = _.clearInterval = q;

	_.setAsync = a;

	_.events = e;

})();