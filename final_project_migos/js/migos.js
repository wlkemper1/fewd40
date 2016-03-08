/******************************************
Pseudocode:
- Click a button:
	-Animation
	-Sound plays

/*******************************************/



$(document).ready(function() {


	var audio = document.getElementsByTagName("audio")[0,1];
	$(".migobutton").click(function() {
  	audio.play();
	});



});