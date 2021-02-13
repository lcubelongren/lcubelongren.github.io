
/* project function */
/* this opens more information for an individual project id */

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
	const theta1 = angleDeg(arg1);       // good
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
			
			var a = 50 + Math.sin(i/50) * 15;
			var b = a;
			var x = 20;
			var y = 10 + Math.sin(i/50) * 2;
			
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
