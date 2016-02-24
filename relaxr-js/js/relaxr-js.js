


$(document).ready(function() {


    $("button").click(function(event) {
			event.preventDefault();
        alert("We're Not Ready For Sign-Ups (just yet)");
 
    });



	$("#read-more-a").click(function(){

		if ($("#hidden-text-a").is(":hidden")) {
			$("#hidden-text-a").slideDown()
			$("#hidden-text-a").show()
			$("#read-more-a").text("< Read less")

		} else {

			$("#hidden-text-a").slideUp()
			$("#hidden-text-a").hide();
		    $("#read-more-a").text("Read more >");
		}

	});



	$("#read-more-b").click(function(){

		if ($("#hidden-text-b").is(":hidden")) {
			$("#hidden-text-b").slideDown()
			$("#hidden-text-b").show()
			$("#read-more-b").text("< Read less")

		} else {

			$("#hidden-text-b").slideUp()
			$("#hidden-text-b").hide();
		    $("#read-more-b").text("Read more >");
		}

	});


	$("#learn-more").click(function(){


			$("#learn-more-text").show();
			$("#learn-more-text").slideDown();
			
			$("#learn-more").hide();

	});




});









/*

$('.read-more').click(function() {
  $('.hidden-text').slideToggle(function() {
    $('#form-container a').text(
      $(this).is(':visible') ? "Hide form container" : "Show form container"
    );
  });
});


*/












