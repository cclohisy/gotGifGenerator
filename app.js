// console.log("i am linked")
$(document).ready(function () {
    //create topics array- btns
    var topics = ["mother of dragons", "cersei", "jon snow", "tyrion", "jamie lannister", "joffery", "white walkers", "direwolf", "winter is coming", "arya", "ramsay bolton"]
    //create function to display buttons
    function displayButtons() {
        //empty div so only one set of buttons is displayed as new ones are added
        $("#buttonDiv").empty()
        for (i = 0; i < topics.length; i++) {
            //create button for each item in array
            var topicButton = $("<button>")
            topicButton.addClass("topicBtn m-2 btn btn-light")
            //display text of ith item in button
            topicButton.text(topics[i])           
            //assign data-topic attribute = [i] ? ... string value from array?
            topicButton.attr("data-topic", topics[i])
            //display (append) new button in buttons div
            $("#buttonDiv").append(topicButton)
        }
    }
    displayButtons()

    $("#submitButton").on("click", function (event) {
        event.preventDefault()
        //grab  userInput from textbox and set to variable
        var newTopic = $("#userInput").val()   
        //push newTopic into existing topics array
        topics.push(newTopic)
        // console.log(topics)
        displayButtons()

    })

    $("#buttonDiv").on("click", ".topicBtn",function () {
        //empty div so only chosen gifs pop up
        $("#gifsHere").empty()
        //set variable to  get data-topic from button 
        var character = $(this).attr("data-topic");
        //only want 10 images to display.. add limit qualifier to url
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=8GCJbgGlR5BgmVfAFFIRJUhmgJOp4ou0&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.data;
                for (var i = 0; i < results.length; i++) {
                    //create div for each gif w/rating
                    var contentDiv = $("<div>");
                    var gifRating = $("<h4>");
                    var gifTitle = $("<h6>");
                    gifRating.addClass("text-light mx-auto")
                    gifTitle.addClass("text-light mx-auto")
                    // Set text of the paragraph to the rating of the image in results[i].
                    gifRating.text("Rating : " + results[i].rating);
                    gifTitle.text("Title : " + results[i].title);
                    // Append image rating variable to the contentDiv variable.
                    contentDiv.append(gifRating);
                    contentDiv.append(gifTitle);
                    //create image tag to hold gif
                    var gifImg = $("<img>");
                    // append gifImg to contentdiv
                    contentDiv.append(gifImg);
                    //set clases for formatting
                    gifImg.addClass("border border-white m-2")

                    // store animated source in variable 
                    var animatedSource = results[i].images.original.url
                    gifImg.attr("dataAnimated", animatedSource)
                    
                    // Store still source in variable
                    var stillSource = results[i].images.fixed_width_still.url
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