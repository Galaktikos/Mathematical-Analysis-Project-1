let home = document.getElementById("home");
let header = document.getElementById("header");

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

	document.getElementById(section + "Continue").style.opacity = "0";
}

function start(section) {
	document.getElementById(section + "Confirm").style.opacity = "0";
	document.getElementById(section).style.width = "60%";
	document.getElementById(section).style.height = "70%";
	document.getElementById(section).style.left = "17.5%";
	document.getElementById(section).style.top = "15%";
}

function back(section) {
	document.getElementById(section).style.opacity = "0";
}