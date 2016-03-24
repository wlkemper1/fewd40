/******************************************
Pseudocode:
- Click a button:
	-Animation
	-Sound plays

/*******************************************/



$(document).ready(function() {
	event.preventDefault();

	$(".migobutton").click(function() {
		$(this).find("audio")[0].play();
	})

});



$(document).keydown(function(e){

	if ($(window).width() > 916) {

	
    if (e.keyCode == 81) {
    	$("#row1button1").addClass('on');
    	$(this).find("audio")[0].play();
    	setTimeout(function(){
    		$("#row1button1").removeClass('on');}, 350);
    	}

    else if (e.keyCode == 87) {
    	$("#row1button2").addClass('on');
    	$(this).find("audio")[1].play();
    	setTimeout(function(){
    		$("#row1button2").removeClass('on');}, 350);
    	}

    else if (e.keyCode == 69) {
    	$("#row1button3").addClass('on');
    	$(this).find("audio")[2].play();
    	setTimeout(function(){
    		$("#row1button3").removeClass('on');}, 350);
    	}

	else if (e.keyCode == 82) {
    	$("#row1button4").addClass('on');
    	$(this).find("audio")[3].play();
    	setTimeout(function(){
    		$("#row1button4").removeClass('on');}, 350);
    	}

    else if (e.keyCode == 84) {
    	$("#row1button5").addClass('on');
    	$(this).find("audio")[4].play();
    	setTimeout(function(){
    		$("#row1button5").removeClass('on');}, 350);
    	}

    else if (e.keyCode == 89) {
    	$("#row1button6").addClass('on');
    	$(this).find("audio")[5].play();
    	setTimeout(function(){
    		$("#row1button6").removeClass('on');}, 350);
    	}

    else if (e.keyCode == 85) {
    	$("#row1button7").addClass('on');
    	$(this).find("audio")[6].play();
    	setTimeout(function(){
    		$("#row1button7").removeClass('on');}, 350);
    	}

	else if (e.keyCode == 73) {
    	$("#row1button8").addClass('on');
    	$(this).find("audio")[7].play();
    	setTimeout(function(){
    		$("#row1button8").removeClass('on');}, 350);
    	}

	else if (e.keyCode == 79) {
    	$("#row1button9").addClass('on');
    	$(this).find("audio")[8].play();
    	setTimeout(function(){
    		$("#row1button9").removeClass('on');}, 350);
    	}



//////////////////////////////////
//////////////////////////////////
// Takeoff Sounds/////////////////
//////////////////////////////////
//////////////////////////////////


    else if (e.keyCode == 65) {
    	$("#row2button1").addClass('on');
    	$(this).find("audio")[9].play();
    	setTimeout(function(){
    		$("#row2button1").removeClass('on');}, 350);
    	}

    else if (e.keyCode == 83) {
    	$("#row2button2").addClass('on');
    	$(this).find("audio")[10].play();
    	setTimeout(function(){
    		$("#row2button2").removeClass('on');}, 350);
    	}

    else if (e.keyCode == 68) {
    	$("#row2button3").addClass('on');
    	$(this).find("audio")[11].play();
    	setTimeout(function(){
    		$("#row2button3").removeClass('on');}, 350);
    	}

	else if (e.keyCode == 70) {
    	$("#row2button4").addClass('on');
    	$(this).find("audio")[12].play();
    	setTimeout(function(){
    		$("#row2button4").removeClass('on');}, 350);
    	}

    else if (e.keyCode == 71) {
    	$("#row2button5").addClass('on');
    	$(this).find("audio")[13].play();
    	setTimeout(function(){
    		$("#row2button5").removeClass('on');}, 350);
    	}

    else if (e.keyCode == 72) {
    	$("#row2button6").addClass('on');
    	$(this).find("audio")[14].play();
    	setTimeout(function(){
    		$("#row2button6").removeClass('on');}, 350);
    	}

    else if (e.keyCode == 74) {
    	$("#row2button7").addClass('on');
    	$(this).find("audio")[15].play();
    	setTimeout(function(){
    		$("#row2button7").removeClass('on');}, 350);
    	}

	else if (e.keyCode == 75) {
    	$("#row2button8").addClass('on');
    	$(this).find("audio")[16].play();
    	setTimeout(function(){
    		$("#row2button8").removeClass('on');}, 350);
    	}

	else if (e.keyCode == 76) {
    	$("#row2button9").addClass('on');
    	$(this).find("audio")[17].play();
    	setTimeout(function(){
    		$("#row2button9").removeClass('on');}, 350);
    	}


//////////////////////////////////
/////////////////////////////////
// Offset Sounds////////////////
///////////////////////////////
//////////////////////////////


    else if (e.keyCode == 90) {
    	$("#row3button1").addClass('on');
    	$(this).find("audio")[18].play();
    	setTimeout(function(){
    		$("#row3button1").removeClass('on');}, 350);
    	}

    else if (e.keyCode == 88) {
    	$("#row3button2").addClass('on');
    	$(this).find("audio")[19].play();
    	setTimeout(function(){
    		$("#row3button2").removeClass('on');}, 350);
    	}

    else if (e.keyCode == 67) {
    	$("#row3button3").addClass('on');
    	$(this).find("audio")[20].play();
    	setTimeout(function(){
    		$("#row3button3").removeClass('on');}, 350);
    	}

	else if (e.keyCode == 86) {
    	$("#row3button4").addClass('on');
    	$(this).find("audio")[21].play();
    	setTimeout(function(){
    		$("#row3button4").removeClass('on');}, 350);
    	}

    else if (e.keyCode == 66) {
    	$("#row3button5").addClass('on');
    	$(this).find("audio")[22].play();
    	setTimeout(function(){
    		$("#row3button5").removeClass('on');}, 350);
    	}

    else if (e.keyCode == 78) {
    	$("#row3button6").addClass('on');
    	$(this).find("audio")[23].play();
    	setTimeout(function(){
    		$("#row3button6").removeClass('on');}, 350);
    	}

    else if (e.keyCode == 77) {
    	$("#row3button7").addClass('on');
    	$(this).find("audio")[24].play();
    	setTimeout(function(){
    		$("#row3button7").removeClass('on');}, 350);
    	}

	else if (e.keyCode == 188) {
    	$("#row3button8").addClass('on');
    	$(this).find("audio")[25].play();
    	setTimeout(function(){
    		$("#row3button8").removeClass('on');}, 350);
    	}

	else if (e.keyCode == 190) {
    	$("#row3button9").addClass('on');
    	$(this).find("audio")[26].play();
    	setTimeout(function(){
    		$("#row3button9").removeClass('on');}, 350);
    	}
    }


});









