
console.log("i am here")

$(document).ready(function () {

//establish nessicary variables
//userInput
//create topics array
//this will be the tile of the buttons displayed
var topics = ["mother of dragons","cersei", "jon snow" , "GOT dragons", "tyrion", "jamie lannister", "joffery", "white walkers", "bran", "direwolf", "winter is coming", "arya", "ramsay bolton"]
console.log(topics)

//create function to display buttons
    //function displayButtons
//loop through topics array
// for (i=0; i<topics.lenghth; i++) 
    //create button for each item in array
        //var topicButton 
            //assign data-topic attribute = [i] ? ... string value from array?
            //button should be titled with the text from the array
    //display (append) new button in buttons div

    //eventually... add new put from user input 
        //add userInput to topics array
        //create new button with title of userInput

//on click of topic button...
    //grab data from giphy API
        //set variable (var character?) to  get data-topic from button 
        //set query URL variable 
            //var queryURL = "......" + character + ".....API key"
        //run ajax to get json data
            //url = queryURL
            //method = "GET"
        //then run function to log response - log object to find what you are looking for 
        //.then(function(response){}
            //console.log(response)
        // make a variable named results to store response.data
            // var results = response.data;
            //console.log(response.data);
        //grab data and log what we need... 
            //rating
            //static image url...fixed height so display evenly?  
            //animated image url... fixed height so display evenly? 
        //once this is working... continue below :) 

        //run loop to display search data for info we want... static image, rating, and animated gif? 
        //only want 10 images to display
        //for (var i = 0; i < 11; i++)
            // Make a div to hold image tag and rating  and store in variable
                //var gifDiv= $("<div>");
            // Make a paragraph to hold rating and store in variable
                //var gifRating = $("<p>");
            // Set text of the paragraph to the rating of the image in results[i].
                //gifRating.text(results[i].rating);     
            //create image tag to hold static image
                //var staticImage = $("<img>");
                // Set the image's src to results[i]'s static image
                    // staticImage.attr("src", results[i]........;
                //set data-state attribute to still 
                    //staticImage.attr("data-state", "still")

            //create image tag to hold animated gif
                //var animatedImage = $("<img>");
                // Set the image's src to results[i]'s animated image
                    // animatedImage.attr("src", results[i]........;
                //set data-state attribute to animated 
                    //animatedImage.attr("data-state", "animated")

            // Append image rating variable to the gifDiv variable.
                //gifDiv.append(gifRating);
            // Append static image to the gifDiv variable.
                //gifDiv.append(staticImage);
            // append animated image to gifDiv
                 //gifDiv.append(animatedImage);
                 //hide animated image? 

            // Prepend the animalDiv to html id of gifs-appear-here.
                //$("#gifsHere").prepend(gifDiv);
    //close on button click function 

//on click of image
    //make a variable named state and then store the image's data-state into it.
      //var state = $(this).attr("data-state")   
      //console.log(state)
    //IF state === still 
        //hide static image
        //display animated image
        //update data-state to animated
    //ELSE If state == animated 
        //hide animated image
        //display static image
        //update data-state to still

//create function to display new buttons
  // when submit button clicked..
    //$("#submitButton").on("click", function(event) {
                //event.preventDefault() - not sure what this is doing ... 
        //grab  userInput from textbox and set to variable
            //var newTopic = $("#userInput").val()
        //push newTopic into existing topics array
            //topics.push(newTopic)

  //NOT SURE WHAT THIS IS DOING FROM CLASS EXAMPLE... MIGHT NOT BE NEEDED...
    // Adding click event listeners to all elements with a class of "movie" - 
    //$(document).on("click", ".movie", displayMovieInfo);


})// closes document ready function 