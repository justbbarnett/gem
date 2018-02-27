$(document).ready(function() {

    //The Incredibles family

    var characters = [ "mr", "mrs", "violet", "dash", "edna"];
    var powerRate = [10, 8, 6, 5, 13];
    var counter = 0;
    var targetNumber = 103;
    //  random  = Math.floor(Math.random() * 150 + 75)


    var wins = 0;
    var losses = 0;

    console.log(characters)
    console.log(characters.length)
    console.log(powerRate)
    
    for (var i =0; i<characters.length; i++) {
    
        var charImage = $("<img>");
        charImage.addClass("character-image");
        charImage.attr("src", "images/"+characters[i]+".png");

        charImage.attr("data-power", powerRate[i]);
        $("#characters-section").append(charImage);
    }

    $(".character-image").on("click", function(){

        var power = ($(this).attr("data-power"));
        power = parseInt(power);
        counter += power

        
        var newScore = "<p>Current number: " + counter + "</p>"
            document.querySelector("#counter").innerHTML = newScore;
        

        var targetHTML = "<p>Get to number: " + targetNumber + "</p>"
            document.querySelector("#target-number").innerHTML = targetHTML;


        if (counter === targetNumber) {
          wins++, counter = 0;
          alert ("You win! The villians will be very afraid.")
        }
        else if (counter >= targetNumber) {
          losses++, counter = 0;
          alert ("You loose! This is not good news for humanity.")
        }
        var record = "<p>Wins: " + wins + "</p>" +
                    "<p>Losses: " + losses + "</p>";

            document.querySelector("#history").innerHTML = record;

    })

});
