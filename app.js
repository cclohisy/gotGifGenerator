
console.log("i am here")

$(document).ready(function () {

    //establish nessicary variables
    //userInput?
    
    //create topics array
    //this will be the tile of the buttons displayed
    var topics = ["mother of dragons", "cersei", "jon snow", "GOT dragons", "tyrion", "jamie lannister", "joffery", "white walkers", "direwolf", "winter is coming", "arya", "ramsay bolton"]
    console.log(topics)


    //create function to display buttons
    function displayButtons() {
        //empty div so only one set of buttons is displayed as new ones are added
        $("#buttonDiv").empty()
        //loop through topics array
        for (i = 0; i < topics.length; i++) {
            //create button for each item in array
            var topicButton = $("<button>")
            //add classes for formatting
            topicButton.attr("class", " topicBtn m-2 btn btn-light")
            //display text of ith item in button
            topicButton.text(topics[i])
            
            //assign data-topic attribute = [i] ? ... string value from array?
            topicButton.attr("data-topic", topics[i])
            //display (append) new button in buttons div
            $("#buttonDiv").append(topicButton)
        }
    }//end of displayButtons funciton 

    //calls display buttons function
    displayButtons()
    
    //create function to display new buttons
    // when submit button clicked..
    $("#submitButton").on("click", function (event) {
        // - not sure what this is doing ... stopping form from actually submitting?
        event.preventDefault()
        //grab  userInput from textbox and set to variable
        var newTopic = $("#userInput").val()   
        //push newTopic into existing topics array
        topics.push(newTopic)
        console.log(topics)
        //run display buttons function 
        displayButtons()

    })//closes new button function


    //on click of topic button...
    $(".topicBtn").on("click", function () {
        //empty div so only chosen gifs pop up
        $("#gifsHere").empty()
        //set variable (var character?) to  get data-topic from button 
        var character = $(this).attr("data-topic");
        //set query URL variable 
        //only want 10 images to display.. add limit qualifier to url

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=8GCJbgGlR5BgmVfAFFIRJUhmgJOp4ou0&limit=10";

        //run ajax to get json data from giphy API
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                //run loop to display search data for info we want... static image, rating, and animated gif? 
                // make a variable named results to store response.data
                var results = response.data;
                console.log(results);
                //grab data for each item in resutls array and set variables... display in #gifsHere
                for (var i = 0; i < results.length; i++) {
                    //create div for each gif w/rating
                    var contentDiv = $("<div>");
                    // Make a paragraph to hold rating and store in variable
                    var gifRating = $("<h3>");
                    //set class for formatting
                    gifRating.attr("class", "text-light ")
                    // Set text of the paragraph to the rating of the image in results[i].
                    gifRating.text("Rating : " + results[i].rating);
                    // Append image rating variable to the contentDiv variable.
                    contentDiv.append(gifRating);

                    //create image tag to hold gif
                    var gifImg = $("<img>");
                    // append gifImg to contentdiv
                    contentDiv.append(gifImg);
                    //set clases for formatting
                    gifImg.attr("class", "img-responsive")

                    // store animated source in variable 
                    var animatedSource = results[i].images.fixed_height.url
                    gifImg.attr("dataAnimated", animatedSource)
                    // Store still source in variable
                    var stillSource = results[i].images.fixed_height_still.url
                    gifImg.attr("dataStill", stillSource)
                    //set data state attribute to still 
                    gifImg.attr("dataState", "still")

                    //set img src to dataStill
                    gifImg.attr("src", stillSource)
                    // Append static image to the content div variable.
                    contentDiv.append(gifImg);


                    // Prepend the contentDiv to html id of gifsHere
                    $("#gifsHere").prepend(contentDiv);

                }

            })
    })//close on button click function 

    //on click of image
    $("#gifsHere").on("click", "img", function () {
        // //make a variable named state and then store the image's data-state into it.
        var state = $(this).attr("dataState")
        //IF state === still
        if (state == "still") {
            //update the src attribute img to animateSource value,
            $(this).attr("src", $(this).attr("dataAnimated"));
            // update data state to animated
            $(this).attr("dataState", "animate");
        }
        //else if
        else if (state == "animate") {
            // update the src attribute img to animateSource value,
            $(this).attr("src", $(this).attr("dataStill"));
            //update data state to stil 
            $(this).attr("dataState", "still");
        }
    
    })//closes static img click function

})// closes document ready function 