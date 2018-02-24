
       var characters = {
        "mr" : {
            name: "Mr Incredible",
            health: 100,
            offense: 20,
            defense: 20,
            image: "../images/mr.png"
        },
        "mrs" : {
            name: "Ms incredible",
            health: 120,
            offense: 15,
            defense: 10,
            image: "../images/mrs.png"
        },
        "violet": {
            name: "Violet",
            health: 150,
            offense: 10,
            defense: 5,
            image: "../images/violet.png"
        },
        "dash" : {
            name: "Dash",
            health: 170,
            offense: 12,
            defense: 7,
            image: "../images/dash.png"
        },
        "edna" : {
            name: "Edna",
            health: 80,
            offense: 25,
            defense: 20,
            image: "../images/edna.png"
        },
    };

    console.log(characters)
    console.log(characters.length)
    console.log(characters.edna.health)

    
    //things the game needs to count
    var currCharacter;
    var currDefender;
    var defenders = [];
    var battleResults;
    var attackCount = 0;
    
    
    
    
    // var render = function (character, renderArea) {
    //     //character = object, renderArea = class, createChar = string

    //     //define each "var" in the character div - character now defined as the object to hold
    //     var charDiv = $( "<div class='character' data-name='"+ character.name + "'>");
    //     var charName = $( "<div class='character-name'>").text(character.name);
    //     var charImage = $( "<img alt='Icredible character of your choice' class='character-image'>").attr("src", character.image);
    //     var charHealth = $( "<div class='character-text'>").attr(character.health);

    //     charDiv.append(charName).append(charImage).append(charHealth); 
    //     //this should display everything you just coded

    //     // if (charStatus == "defender") {
    //     //     $(charDiv).addClass("defender");
    //     // }
    //     // else if (charStatus == "target") {
    //     //     currDefender = character;
    //     //     $(charDiv).addClass("target");
    //     // }

    // };

    for( var key in characters ){
        let thisCharacter = characters[key].name;
        console.log(thisCharacter);
    }

    for (var x in characters) {
        var charDiv = $( "<div>");
        charDiv.addClass ("card character");

        // var charDiv = $("<div class='card character'>")
        charDiv.attr ("data-name", characters[x].name);


        
        
        var charName = $( "<div class='character-name'>").text(characters[x].name);
        var charImage = $( "<img alt='Icredible character of your choice' class='character-image'>").attr("src", characters[x].image);
        var charHealth = $( "<div class='character-text'>").text(characters[x].health);
        
        charDiv.append(charName).append(charImage).append(charHealth);

        $(".character-section").append(charDiv).addClass ("character");

        
    }

    // for (var char in characters) {

    //     var charDiv = $("<div class='card card-iverse' style='baground-image:>")
    //     var charName = $( "<div class=' card-title character-name'>").text(characters[x].name);
    //     var charImage = $( "<img alt='Icredible character of your choice' class='character-image'>").attr("src", characters[x].image).attr("syle", background-image url);
    //     var charHealth = $( "<div class='character-text'>").text(characters[x].health);
        
    //     charDiv.append(charName).append(charImage).append(charHealth);

    //     $(".character-section").append(charDiv).addClass ("character");

    // }