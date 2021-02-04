
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
