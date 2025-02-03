
/* scroll to anchor from URL (for Projects page, currently) */
/* format #1: baseURL + #section */
/* format #2: baseURL + #section-project */

document.onreadystatechange = function() {
	if (document.readyState == 'interactive') {
		let URL = window.location.href.split('#');
		if (URL.length > 1) {
			let target = URL.slice(-1)[0].split('-');
			section = target[0];
			projectsectionFunction('project-section-' + section, 'underline-project-section-' + section);
			if (target.length == 2) {
				project = target[1];
				projectFunction(project, project + '_text', 'arrow-' + project);
			}
			//document.getElementById('project-section-' + section).scrollIntoView();
//			let scroll_length = 0;
//			scroll_length += document.getElementById('project-section-' + section).offsetHeight;
//			window.scroll({top: scroll_length, behavior: 'smooth'});
		}
	}
}

/* project function */
/* this opens more information for an individual project id */
/* as in, the drop down buttons and their arrows */

function projectsectionFunction(id,butt_id) {
  var x = document.getElementById(id);
  var butt = document.getElementById(butt_id);
  if (x.style.display === "grid") {
    x.style.display = "none";
	butt.style.textDecoration = "none";
	
  } else {
    x.style.display = "grid";
	butt.style.textDecoration = "underline";
  }
}

function projectFunction(id,text_id,arrow_id) {
  var x = document.getElementById(id);
  var xtext = document.getElementById(text_id);
  var arrow = document.getElementById(arrow_id);
  if (x.style.display === "block") {
    x.style.display = "none";
	xtext.style.display = "none";
	arrow.style.transform = "rotate(135deg) translate(0px,-10px)";
  } else {
    x.style.display = "block";
	xtext.style.display = "block";
	arrow.style.transform = "rotate(45deg) translate(5px,5px)";
  }
}

/* load a text file from a URL location */
/* set innerHTML based upon id */

function getText(url,id){
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
				document.getElementById(id).innerHTML = request.responseText;
            }
        }
    }
}

/* homepage animation stuff */
/* angle between corners between two squares */

function angleDeg(arg) {
	var angleDeg = Math.atan(arg) * 180 / Math.PI;
	return(angleDeg);
}

function invTan() {
	var r = document.querySelector(':root');
	const element = document.documentElement
	
	var x = getComputedStyle(element).getPropertyValue('--x');
	var y = getComputedStyle(element).getPropertyValue('--y');
	var a = getComputedStyle(element).getPropertyValue('--a');
	var b = getComputedStyle(element).getPropertyValue('--b');
	
	x = x.slice(0,-2);
	y = y.slice(0,-2);
	a = parseFloat(a) / 100;
	b = parseFloat(b) / 100;
	
	// console.log(x,y,a,b);
	
	var arg1 = ((x/2) + b*y) / ((x/2) + a*y);
	var arg2 = ((x/2) + b*y) / ((x/2) - a*y - y);
	var arg3 = ((x/2) - b*y - y) / ((x/2) + a*y);
	var arg4 = ((x/2) - b*y - y) / ((x/2) - a*y - y);
	const theta1 = angleDeg(arg1);
	const theta2 = 180 - angleDeg(arg2);
	const theta3 = 180 - angleDeg(arg3);
	const theta4 = angleDeg(arg4);
	
	r.style.setProperty('--theta1', `${theta1}deg`);
	r.style.setProperty('--theta2', `${theta2}deg`);
	r.style.setProperty('--theta3', `${theta3}deg`);
	r.style.setProperty('--theta4', `${theta4}deg`);
}

function homeAnim() {
	var r = document.querySelector(':root');
	var i = 0;
	var id = setInterval(frame, 20);
	function frame() {
		if (i < 0) {
			clearInterval(id);
		} else {
			i++;
			
			var a = 50 + Math.sin(i/50) * 10;
			var b = a;
			var x = 20;
			var y = 13; //+ Math.sin(i/50) * 2;
			
			var rot = Math.cos(i/50) * 20 + i/10;
			
			r.style.setProperty('--a', `-${a}%`);
			r.style.setProperty('--b', `-${b}%`);
			r.style.setProperty('--x', `${x}vw`);
			r.style.setProperty('--y', `${y}vw`);
			
			r.style.setProperty('--rot', `${rot}deg`);
			invTan();
		}
	}
}

/* image slideshow */

function emphImage(img) {
	if (img.className == "photo-gallery-img1") {
		img.className = "photo-gallery-img2";
		document.getElementById("background-layer").style.zIndex = 7;
	}
	else if (img.className == "photo-gallery-img2") {
		img.className = "photo-gallery-img1";
		document.getElementById("background-layer").style.zIndex = 0;
	}
}
