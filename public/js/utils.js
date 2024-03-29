// Class to convert between Elo and material for Chess or Go.
// In Chess, material = 1 pawn.
// In Go, material = 1/100 stone (EGF unit).
//
// We use a simple 4-parameter model because the experimental data is too
// limited to justify anything more complex.

// Constructor.
function Converter(a, b, c, d) {
	this.a = a;	// Strength of God on material scale.
	this.b = b;	// Exponent (from 0 to inf, 1 is standard).
	this.c = c;	// Multiplicative factor.
	this.d = d;	// Elo corresponding to 1 material weaker than God.
}

Converter.prototype.eloFromMaterial = function(x) {
	var a = this.a;
	var b = this.b;
	var c = this.c;
	var d = this.d;
	if (b == 1)
		return -Math.log(a-x) * c + d
	else
		return (1 - Math.pow(a-x, 1-b)) * c/(1-b) + d;
};

Converter.prototype.materialFromElo = function(elo) {
	var a = this.a;
	var b = this.b;
	var c = this.c;
	var d = this.d;
	// Inverse of eloFromMaterial.
	if (b == 1)
		return a - Math.exp(-(elo - d)/c);
	else
		return a - Math.pow(1 - (elo - d) * (1-b)/c, 1/(1-b));
};

Converter.prototype.eloPerMaterialAtMaterial = function(x) {
	var a = this.a;
	var b = this.b;
	var c = this.c;
	// Derivative of eloFromMaterial. "d" is unused.
	return Math.pow(a-x, -b) * c;
};

Converter.prototype.eloPerMaterialAtElo = function(elo) {
	var b = this.b;
	var c = this.c;
	var d = this.d;
	// == eloPerMaterialAtMaterial(materialFromElo(elo)). "a" is unused.
	if (b == 1)
		return Math.exp((elo - d)/c) * c;
	else
		return Math.pow(1 - (elo - d) * (1-b)/c, -b/(1-b)) * c;
};

function canonizeName(name) {
	// We ignore comas, dashes, and case, so that "Sedol" == "Se-Dol", etc.
	return name.replace(/[,`_-]/g, "").toLowerCase();
}

function findByName(name, system) {
	// First try to find an "exact" match to get exactly what we want
	// when we affix the federation.
	name = canonizeName(name);
	for (var i = 0; i < system.list.length; i++) {
		if (name == canonizeName(system.list[i][0]))
			return i;
	}

	// Try again without matching the federation.
	// Also try flipping first and last names, return first match.
	name = name.replace(/ \(...\)$/, "");
	var flipped = "";
	var parts = name.split(" ");
	if (parts.length == 2)
		flipped = parts[1] + " " + parts[0];

	// Give priority to active version.
	for (var i = 0; i < system.list.length; i++) {
		if ("isInactive" in system && system.isInactive(system.list[i]))
			continue;
		var candidate = canonizeName(system.list[i][0]).
		                replace(/ \(...\)$/, "");
		if (name == candidate || flipped == candidate)
			return i;
	}

	// Search everything.
	for (var i = 0; i < system.list.length; i++) {
		var candidate = canonizeName(system.list[i][0]).
		                replace(/ \(...\)$/, "");
		if (name == candidate || flipped == candidate)
			return i;
	}

	return -1;
}

// Invert an increasing function, where fn(x0) < y and fn(x1) > y.
function inverseFn(fn, x0, x1, y) {
	// Use binary-search.
	while (x1 - x0 > 1e-9) {
		var x = (x0 + x1)/2;
		if (fn(x) < y)
			x0 = x;
		else
			x1 = x;
	}
	return (x0 + x1)/2;
}

// The logistic and normal Elo formulas agree on
// eloDiff = 0 and
// eloDiff = +/- 234.608657464189...

function eloLogistic(eloDiff) {
	return 1 / (1 + Math.pow(10, -eloDiff / 400));
}

function eloLogisticDerivative(x) {
	var t = Math.pow(10, -x/400);

	return Math.LN10 / 400 * t / ((1+t)*(1+t));
}

function invEloLogistic(p) {
	return -(400 / Math.LN10) * Math.log(1 / p - 1);
}

var FIDE_STDDEV = 2000/7;

function eloNormal(eloDiff) {
	return erfc(-eloDiff / (FIDE_STDDEV * Math.sqrt(2))) / 2;
}

function invEloNormal(p) {
	return -(FIDE_STDDEV * Math.sqrt(2)) * invErfc(p * 2);
}

