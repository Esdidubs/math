/*/////////////////////
AREAS
/////////////////////*/

// area of a square
function areaSquare(len) {
	let area = len * len;
	$('#answer').replaceWith(` 
    <div id="answer">The area is ${area}.</div>`);
}

// area of a rectangle
function areaRectangle(len, wid) {
	let area = len * wid;
	$('#answer').replaceWith(` 
    <div id="answer">The area is ${area}.</div>`);
}

// triangle formula with base and height
function areaTriangle(base, hgt) {
	let area = base * hgt / 2;
	$('#answer').replaceWith(` 
    <div id="answer">The area is ${area}.</div>`);
}

// Heron's formula for triangle area with all 3 sides
function areaTriangle2(side1, side2, side3) {
	let sides = (side1 + side2 + side3) / 2;
	let area = Math.sqrt(sides * (sides - side1) * (sides - side2) * (sides - side3));
	$('#answer').replaceWith(` 
    <div id="answer">The area is ${area}.</div>`);
}

// area of rhombus using 2 different side lengths
function areaRhombus(lDiag, sDiag) {
	let area = lDiag * sDiag / 2;
	$('#answer').replaceWith(` 
    <div id="answer">The area is ${area}.</div>`);
}

// area of trapezoid with small side, large side, height
function areaTrapezoid(lSide, sSide, hgt) {
	let area = (lSide + sSide) / 2 * hgt;
	$('#answer').replaceWith(` 
    <div id="answer">The area is ${area}.</div>`);
}

// area of a circle
function areaCircle(rad) {
	let area = Math.PI * rad * rad;
	let piArea = rad * rad;
	$('#answer').replaceWith(` 
    <div id="answer">The area is ${area} or ${piArea}&Pi;.</div>`);
}

// area of a sphere
function areaSphere(rad) {
	let area = 4 * Math.PI * rad * rad;
	let piArea = 4 * rad * rad;
	$('#answer').replaceWith(` 
    <div id="answer">The surface area is ${area} or ${piArea}&Pi;.</div>`);
}

// area of a cube
function areaCube(side) {
	let area = 6 * side * side;
	$('#answer').replaceWith(` 
    <div id="answer">The surface area is ${area}.</div>`);
}

// area of a cylinder
function areaCylinder(rad, hgt) {
	let area = 2 * Math.PI * rad * hgt;
	let piArea = 2 * rad * hgt;
	$('#answer').replaceWith(` 
    <div id="answer">The surface area is ${area} or ${piArea}&Pi;.</div>`);
}

/*/////////////////////
VOLUMES
/////////////////////*/

function volumeCube(side) {
	let vol = side * side * side;
	$('#answer').replaceWith(` 
    <div id="answer">The volume is ${vol}.</div>`);
}

function volumeParallelepiped(len, wid, hgt) {
	let vol = len * wid * hgt;
	$('#answer').replaceWith(` 
    <div id="answer">The volume is ${vol}.</div>`);
}

function volumeRegularPrism(base, hgt) {
	let vol = base * hgt;
	$('#answer').replaceWith(` 
    <div id="answer">The volume is ${vol}.</div>`);
}

function volumeCylinder(rad, hgt) {
	let vol = Math.PI * rad * rad * hgt;
	let piVol = rad * rad * hgt;
	$('#answer').replaceWith(` 
    <div id="answer">The surface area is ${vol} or ${piVol}&Pi;.</div>`);
}

function volumeSphere(rad) {
	let vol = 4 / 3 * Math.PI * rad * rad * rad;
	let piVol = 4 / 3 * rad * rad * rad;
	$('#answer').replaceWith(` 
    <div id="answer">The surface area is ${vol} or ${piVol}&Pi;.</div>`);
}

/*/////////////////////
EXPONENTS
/////////////////////*/

// solving x^y
function exponent(num, exp) {
	let ans = Math.pow(num, exp);
	$('#answer').replaceWith(` 
    <div id="answer">The answer is ${ans}.</div>`);
}

// solving x^m * x^n
function exponentMultiply(exp1, exp2) {
	let ans = exp1 + exp2;
	$('#answer').replaceWith(` 
    <div id="answer">The answer is x<sup>${ans}</sup>.</div>`);
}

// solving x^m / x^n
function exponentDivide(exp1, exp2) {
	let ans = exp1 - exp2;
	$('#answer').replaceWith(` 
    <div id="answer">The answer is x<sup>${ans}</sup>.</div>`);
}

// solving x^m^n
function powerOfPower(exp1, exp2) {
	let ans = exp1 * exp2;
	$('#answer').replaceWith(` 
    <div id="answer">The answer is x<sup>${ans}</sup>.</div>`);
}

/*/////////////////////
MISC EQUATIONS
/////////////////////*/

//Distance between two points
function distanceBetweenPoints(x1, x2, y1, y2) {
	let ans = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
	$('#answer').replaceWith(` 
    <div id="answer">The answer is ${ans}.</div>`);
}

//midpoints
function midPoint(x1, x2, y1, y2) {
	let xMid = (x1 + x2) / 2;
	let yMid = (y1 + y2) / 2;
	$('#answer').replaceWith(` 
    <div id="answer">The answer is M(${xMid}, ${yMid}).</div>`);
}

//pythagorean theorem
function pythagorean(a, b, c) {
	if (a === '?') {
		let ans = Math.sqrt(c * c - b * b);
		$('#answer').replaceWith(` 
        <div id="answer">The answer is ${ans}.</div>`);
	} else if (b === '?') {
		let ans = Math.sqrt(c * c - a * a);
		$('#answer').replaceWith(` 
        <div id="answer">The answer is ${ans}.</div>`);
	} else if (c === '?') {
		let ans = Math.sqrt(a * a + b * b);
		$('#answer').replaceWith(` 
        <div id="answer">The answer is ${ans}.</div>`);
	}
}

// quadratic formula
function quadratic(a, b, c) {
	let ans1 = (-1 * b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
	let ans2 = (-1 * b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
	$('#answer').replaceWith(` 
        <div id="answer">The answer is ${ans1} or ${ans2}.</div>`);
}

// mean mode median range of a set of numbers
function meanMedianRange(arr) {
	let sortedArr = arr.sort(function(a, b) {
		return a - b;
	});

	let min = sortedArr[0];
	let max = sortedArr[sortedArr.length - 1];
	let range = max - min;

	let mean = 0;
	for (let num in sortedArr) {
		mean += sortedArr[num];
	}
	mean = mean / sortedArr.length;
	let median;
	if (sortedArr.length % 2 == 1) {
		median = sortedArr[sortedArr.length / 2 - 0.5];
	} else {
		median = (sortedArr[sortedArr.length / 2] + sortedArr[sortedArr.length / 2 - 1]) / 2;
	}

	console.log(`min ${min} max ${max} range ${range} mean ${mean} median ${median}`);

	$('#answer').replaceWith(` 
        <div id="answer">The answer is min: ${min} - max: ${max} - range: ${range} - mean: ${mean} - median: ${median}.</div>`);
}
