$(function() {
	buttons();
});

function buttons() {
	// user changes the formula
	$('#selection').on('change', function() {
		event.preventDefault();

		$('#answer').replaceWith(` 
        <div id="answer"></div>`);
		showFormula();
	});

	// sends the data to the appropriate formula
	$('main').on('click', '.formulaSubmitBtn', function() {
		event.preventDefault();
		if ($(this).attr('id') == 'areaSquareBtn') {
			areaSquare(Number($('#side').val()));
		} else if ($(this).attr('id') == 'areaRectangleBtn') {
			areaRectangle(Number($('#length').val()), Number($('#width').val()));
		} else if ($(this).attr('id') == 'areaTriangleBtn') {
			areaTriangle(Number($('#base').val()), Number($('#hgt').val()));
		} else if ($(this).attr('id') == 'areaTriangle2Btn') {
			areaTriangle2(Number($('#side1').val()), Number($('#side2').val()), Number($('#side3').val()));
		} else if ($(this).attr('id') == 'areaRhombusBtn') {
			areaRhombus(Number($('#lDiag').val()), Number($('#sDiag').val()));
		} else if ($(this).attr('id') == 'areaTrapezoidBtn') {
			areaTrapezoid(Number($('#lSide').val()), Number($('#sSide').val()), Number($('#hgt').val()));
		} else if ($(this).attr('id') == 'areaCircleBtn') {
			areaCircle(Number($('#rad').val()));
		} else if ($(this).attr('id') == 'areaSphereBtn') {
			areaSphere(Number($('#rad').val()));
		} else if ($(this).attr('id') == 'areaCubeBtn') {
			areaCube(Number($('#side').val()));
		} else if ($(this).attr('id') == 'areaCylinderBtn') {
			areaCylinder(Number($('#rad').val()), Number($('#hgt').val()));
		} else if ($(this).attr('id') == 'volumeCubeBtn') {
			volumeCube(Number($('#side').val()));
		} else if ($(this).attr('id') == 'volumeParallelepipedBtn') {
			volumeParallelepiped(Number($('#length').val()), Number($('#width').val()), Number($('#hgt').val()));
		} else if ($(this).attr('id') == 'volumeRegularPrismBtn') {
			volumeRegularPrism(Number($('#base').val()), Number($('#hgt').val()));
		} else if ($(this).attr('id') == 'volumeCylinderBtn') {
			volumeCylinder(Number($('#rad').val()), Number($('#hgt').val()));
		} else if ($(this).attr('id') == 'volumeSphereBtn') {
			volumeSphere(Number($('#rad').val()));
		} else if ($(this).attr('id') == 'exponentBtn') {
			exponent(Number($('#num').val()), Number($('#exp').val()));
		} else if ($(this).attr('id') == 'exponentMultiplyBtn') {
			exponentMultiply(Number($('#exp1').val()), Number($('#exp2').val()));
		} else if ($(this).attr('id') == 'exponentDivideBtn') {
			exponentDivide(Number($('#exp1').val()), Number($('#exp2').val()));
		} else if ($(this).attr('id') == 'powerOfPowerBtn') {
			powerOfPower(Number($('#exp1').val()), Number($('#exp2').val()));
		} else if ($(this).attr('id') == 'distanceBetweenPointsBtn') {
			distanceBetweenPoints(Number($('#x1').val()), Number($('#x2').val()), Number($('#y1').val()), Number($('#y2').val()));
		} else if ($(this).attr('id') == 'midPointBtn') {
			midPoint(Number($('#x1').val()), Number($('#x2').val()), Number($('#y1').val()), Number($('#y2').val()));
		} else if ($(this).attr('id') == 'pythagoreanBtn') {
			let aVal;
			let bVal;
			let cVal;
			if ($('#a').val() === '?') {
				aVal = '?';
				bVal = Number($('#b').val());
				cVal = Number($('#c').val());
			} else if ($('#b').val() === '?') {
				aVal = Number($('#a').val());
				bVal = '?';
				cVal = Number($('#c').val());
			} else if ($('#c').val() === '?') {
				aVal = Number($('#a').val());
				bVal = Number($('#b').val());
				cVal = '?';
			}
			pythagorean(aVal, bVal, cVal);
		} else if ($(this).attr('id') == 'quadraticBtn') {
			quadratic(Number($('#a').val()), Number($('#b').val()), Number($('#c').val()));
		} else if ($(this).attr('id') == 'meanMedianRangeBtn') {
			let str = $('#arr').val();
			str = str.replace(/\s/g, '');
			let arr = str.split(',');
			for (let i = 0; i < arr.length; i++) {
				arr[i] = Number(arr[i]);
			}
			meanMedianRange(arr);
		}
	});
}

// displays the formula inputs
function showFormula() {
	if ($('#selection').val() === 'areaSquare') {
		$('#formulaZone').replaceWith(` 
		<div id="formulaZone">
            <label for="side">Side:</label>
            <input type="number" placeholder="number" name= "side" id="side" step="any" />
            <button id="areaSquareBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'areaRectangle') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="length">Length:</label>
            <input type="number" placeholder="number" name= "length" id="length" step="any" />
            <label for="width">Width:</label>
            <input type="number" placeholder="number" name= "width" id="width" step="any" />
            <button id="areaRectangleBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'areaTriangle') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="base">Base:</label>
            <input type="number" placeholder="number" name= "base" id="base" step="any" />
            <label for="hgt">Height:</label>
            <input type="number" placeholder="number" name= "hgt" id="hgt" step="any" />
            <button id="areaTriangleBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'areaTriangle2') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="side1">Side 1:</label>
            <input type="number" placeholder="number" name= "side1" id="side1" step="any" />
            <label for="side2">Side 2:</label>
            <input type="number" placeholder="number" name= "side2" id="side2" step="any" />
            <label for="side3">Side 3:</label>
            <input type="number" placeholder="number" name= "side3" id="side3" step="any" />
            <button id="areaTriangle2Btn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'areaRhombus') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="lDiag">Long slant:</label>
            <input type="number" placeholder="number" name= "lDiag" id="lDiag" step="any" />
            <label for="sDiag">Short slant:</label>
            <input type="number" placeholder="number" name= "sDiag" id="sDiag" step="any" />
            <button id="areaRhombusBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'areaTrapezoid') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="lSide">Side 1:</label>
            <input type="number" placeholder="number" name= "lSide" id="lSide" step="any" />
            <label for="sSide">Side 2:</label>
            <input type="number" placeholder="number" name= "sSide" id="sSide" step="any" />
            <label for="hgt">Side 3:</label>
            <input type="number" placeholder="number" name= "hgt" id="hgt" step="any" />
            <button id="areaTrapezoidBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'areaCircle') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="rad">Radius:</label>
            <input type="number" placeholder="number" name= "rad" id="rad" step="any" />
            <button id="areaCircleBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'areaSphere') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="rad">Radius:</label>
            <input type="number" placeholder="number" name= "rad" id="rad" step="any" />
            <button id="areaSphereBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'areaCube') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="side">Side:</label>
            <input type="number" placeholder="number" name= "side" id="side" step="any" />
            <button id="areaCubeBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'areaCylinder') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="rad">Radius:</label>
            <input type="number" placeholder="number" name= "rad" id="rad" step="any" />
            <label for="hgt">Height:</label>
            <input type="number" placeholder="number" name= "hgt" id="hgt" step="any" />
            <button id="areaCylinderBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'volumeCube') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="side">Side:</label>
            <input type="number" placeholder="number" name= "side" id="side" step="any" />
            <button id="volumeCubeBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'volumeParallelepiped') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="length">Length:</label>
            <input type="number" placeholder="number" name= "length" id="length" step="any" />
            <label for="width">Width:</label>
			<input type="number" placeholder="number" name= "width" id="width" step="any" />
			<label for="hgt">Height:</label>
            <input type="number" placeholder="number" name= "hgt" id="hgt" step="any" />
            <button id="volumeParallelepipedBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'volumeRegularPrism') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="base">Base Area:</label>
            <input type="number" placeholder="number" name= "base" id="base" step="any" />
            <label for="hgt">Height:</label>
            <input type="number" placeholder="number" name= "hgt" id="hgt" step="any" />
            <button id="volumeRegularPrismBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'volumeCylinder') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="rad">Radius:</label>
            <input type="number" placeholder="number" name= "rad" id="rad" step="any" />
            <label for="hgt">Height:</label>
            <input type="number" placeholder="number" name= "hgt" id="hgt" step="any" />
            <button id="volumeCylinderBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'volumeSphere') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="rad">Radius:</label>
            <input type="number" placeholder="number" name= "rad" id="rad" step="any" />
            <button id="volumeSphereBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'exponent') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="num">Number:</label>
            <input type="number" placeholder="number" name= "num" id="num" step="any" />
            <label for="exp">Exponent:</label>
            <input type="number" placeholder="number" name= "exp" id="exp" step="any" />
            <button id="exponentBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'exponentMultiply') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="exp1">Exponent 1:</label>
            <input type="number" placeholder="number" name= "exp1" id="exp1" step="any" />
            <label for="exp2">Exponent 2:</label>
            <input type="number" placeholder="number" name= "exp2" id="exp2" step="any" />
            <button id="exponentMultiplyBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'exponentDivide') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="exp1">Exponent 1:</label>
            <input type="number" placeholder="number" name= "exp1" id="exp1" step="any" />
            <label for="exp2">Exponent 2:</label>
            <input type="number" placeholder="number" name= "exp2" id="exp2" step="any" />
            <button id="exponentDivideBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'powerOfPower') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="exp1">Exponent 1:</label>
            <input type="number" placeholder="number" name= "exp1" id="exp1" step="any" />
            <label for="exp2">Exponent 2:</label>
            <input type="number" placeholder="number" name= "exp2" id="exp2" step="any" />
            <button id="powerOfPowerBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'distanceBetweenPoints') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="x1">x1:</label>
            <input type="number" placeholder="number" name= "x1" id="x1" step="any" />
            <label for="x2">x2:</label>
			<input type="number" placeholder="number" name= "x2" id="x2" step="any" />
			<label for="y1">y1:</label>
            <input type="number" placeholder="number" name= "y1" id="y1" step="any" />
            <label for="y2">y2:</label>
            <input type="number" placeholder="number" name= "y2" id="y2" step="any" />
            <button id="distanceBetweenPointsBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'midPoint') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="x1">x1:</label>
            <input type="number" placeholder="number" name= "x1" id="x1" step="any" />
            <label for="x2">x2:</label>
			<input type="number" placeholder="number" name= "x2" id="x2" step="any" />
			<label for="y1">y1:</label>
            <input type="number" placeholder="number" name= "y1" id="y1" step="any" />
            <label for="y2">y2:</label>
            <input type="number" placeholder="number" name= "y2" id="y2" step="any" />
            <button id="midPointBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'pythagorean') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="a">A:</label>
            <input type="text" placeholder="number" name= "a" id="a" step="any" value="?" />
            <label for="b">B:</label>
			<input type="text" placeholder="number" name= "b" id="b" step="any" value="?" />
			<label for="c">C:</label>
            <input type="text" placeholder="number" name= "c" id="c" step="any" value="?" />
            <button id="pythagoreanBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'quadratic') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="a">A:</label>
            <input type="number" placeholder="number" name= "a" id="a" step="any" />
            <label for="b">B:</label>
			<input type="number" placeholder="number" name= "b" id="b" step="any" />
			<label for="c">C:</label>
            <input type="number" placeholder="number" name= "c" id="c" step="any" />
            <button id="quadraticBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	} else if ($('#selection').val() === 'meanMedianRange') {
		$('#formulaZone').replaceWith(` 
        <div id="formulaZone">
            <label for="arr">Enter in your numbers separated by commas:</label>
            <input type="text" placeholder="1, 2, 3" name= "arr" id="arr" step="any" />
            <button id="meanMedianRangeBtn" class="formulaSubmitBtn">Submit</button>
        </div>`);
	}
}
