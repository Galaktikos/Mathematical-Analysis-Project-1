let home = document.getElementById("home");
let header = document.getElementById("header");
let step;

function moveTo(section) {
	header.style.animation = "fade-out-u 1s ease-out";

	setTimeout(function () {
		header.style.left = "100vw";
	}, 995);
	
	home.style.animation = "blip-out .4s ease";

	setTimeout(function () {
		home.style.left = "100vw";

		document.getElementById(section).style.left = "35%";
		document.getElementById(section).style.animation = "grow-in 1s ease";

		setTimeout(function () {
			document.getElementById(section + "Confirm").style.opacity = "1";
		}, 300);
	}, 390);
}

function start(section) {
	document.getElementById(section + "Confirm").style.opacity = "0";
	document.getElementById(section).style.width = "60%";
	document.getElementById(section).style.height = "70%";
	document.getElementById(section).style.left = "17.5%";
	document.getElementById(section).style.top = "15%";
	document.getElementById(section + "Learn").style.left = "5%";
	document.getElementById(section + "Learn").style.transition = "opacity 1s";
	document.getElementById(section + "Learn").style.opacity = 1;
	document.getElementById(section + "Step").innerHTML = "Base Equation";
	document.getElementById(section + "EquationStep1").style.opacity = 1;
	document.getElementById(section + "EquationStep1").style.bottom = "50%";
	document.getElementById(section + "EquationStep1").style.color = "rgb(0, 150, 220)";
	step = 1;
}

function next(section, final) {
	if (step - 1 == final) {
		location.reload();
	}

	step++;
	document.getElementById(section + "Step").innerHTML = "Step " + (step - 1);
	document.getElementById(section + "EquationStep" + step).style.opacity = 1;
	document.getElementById(section + "EquationStep" + step).style.color = "rgb(0, 150, 220)";
	document.getElementById(section + "EquationStep" + (step - 1)).style.color = "rgb(20, 20, 20)";

	if (step > 2)
		document.getElementById(section + "Step" + (step - 2)).style.opacity = 0;

	document.getElementById(section + "Step" + (step - 1)).style.opacity = 1;

	for (let i = 0; i < step; i++) {
		document.getElementById(section + "EquationStep" + (i + 1)).style.bottom = (10 * (step - i)) + "%";

		if (step - i > 4)
			document.getElementById(section + "EquationStep" + (i + 1)).style.opacity = 0;
	}

	if (step - 1 == final) {
		document.getElementById(section + "Next").innerHTML = "Finish";
		document.getElementById(section + "EquationStep" + step).style.color = "rgb(0, 209, 0)";
	}
}

function back(section) {
	document.getElementById(section).style.opacity = "0";
}