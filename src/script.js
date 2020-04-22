let home = document.getElementById("home");
let header = document.getElementById("header");

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');

	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		  
	  	while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		  
	  	if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}

	return false;
}

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
	}, 390);

	if (getCookie(section)) {
		document.getElementById(section + "Start").style.width = "40%";
		document.getElementById(section + "Start").style.left = "7%";
		document.getElementById(section + "Continue").style.width = "40%";
		document.getElementById(section + "Continue").style.right = "7%";
	}
}

function start(section) {
	document.cookie = section + "=1;;expires=" + new Date(8640000000000000).toUTCString();
}