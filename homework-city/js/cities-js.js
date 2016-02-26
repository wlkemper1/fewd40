
/******************************************
Pseudocode:
- user enters string (or doesn't), hits submit
- get value of the string the user enters in city type
- convert string to lowercase, store as variable
- remove current background
- replace background with submitted city's skyline
/*******************************************/



$(document).ready(function() {


  $("#submit-btn").click(function(){
    
    event.preventDefault();

    var city = $("#city-type").val().trim().toLowerCase();
   
    $('body').removeClass();
    

    if(city==="new york" || city==="new york city" || city==="nyc"){ 
      $('body').addClass('nyc')
    }

    else if(city==="san francisco" || city==="sf" || city==="bay area"){
      $('body').addClass('sf')
    }

    else if(city==="los angeles" || city==="la" || city==="lax"){
      $('body').addClass('la')
    }

    else if(city==="austin" || city==="atx"){
      $('body').addClass('austin')
    }

    else if(city==="sydney" || city==="syd"){
    $('body').addClass('sydney')
    }

    else {
        alert("Please enter a CitiPix registered city.");
    }

    $('#city-type').val('');


  })


});