// 2.	At the top of the liri.js file, write the code you need to grab 
// the data from keys.js. Then store the keys in a variable.
// 3.	Make it so liri.js can take in one of the following commands:
// •	my-tweets
// •	spotify-this-song
// •	movie-this
// •	do-what-it-says
//VAR KEYS not working yet
// var keys = require("keys");
// stores twitterKeys from the keys file.


// var for Twitter access keys
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: "VfW7sHZIZprrq7yfDWDsD6SZi",
    consumer_secret: "mdVkAV3YfzyAWgsySVcxhzpxYK9kIuwFKgoduyIj4ovJXRkItL",
    access_token_key: "2273609821-2DOGOcGXfHGFeT7O2aSoul7K7Y1w2OEeKqhxV3q",
    access_token_secret: "U2ZSHanmnxA8cyuml4XNBX5UxitpZuP6kNKpZ8ztWFBL1",
});

var params = { screen_name: 'LeslieAMoses' };
// getting the text and eliminating the rest
client.get('statuses/user_timeline/text', params, function(error, tweets, response) {
    if (!error && process.argv[2] === "my-tweets") {
        // console.log(tweets);

        // edited code from Brent Lewis to access Tweet obj
        for (var i = 0; i < tweets.length; i++) {
            console.log('\n' + (i + 1) + ')   ' + tweets[i].created_at + ':\n' + '      "' + tweets[i].text + '"' + '\n');
        };
    }
});


// <<<<<SPOTIFY TXT FILE needed?
// Includes the FS package for reading and writing packages
var fs = require("fs");
// FOR MORE INFO, SEE: https://docs.nodejitsu.com/articles/file-system/how-to-read-files-in-nodejs/
// // Running the readFile module that's inside of fs.
// // Stores the read information into the variable "data"
// fs.readFile("random.txt", "utf8", function(err, data) {
// //   // Break the string down by comma separation and store the contents into the output array.
//   var output = data.split(",");
// //   // Loop Through the newly created output array
//   for (var i = 0; i < output.length; i++) {
// //     // Print each element (item) of the array/
//     console.log(output[i]);
//   }
// });

// >>>>>>>>>>>>>>>>>>>SPOTIFY 
var spotify = require('spotify');

spotify.search({ type: 'track', query: 'dancing in the moonlight' },
    function(err, data) {
        if (err) {
            console.log('Error: ' + err);
            return;
        }

        // Do something with 'data' 

    });


// <<<<<<<<MOVIE
/* Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year 
it was created*/
var movName = process.argv;
// totalMov to receive all the user types
var totalMov = "";
// loop through each input
for (i = 2; i < movName.length; i++) {
    // include everything the user types:
    totalMov = totalMov + " " + movName[i];
}
// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");
// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=" + totalMov + "&plot=short&r=json", function(error, response, body) {
    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        var movie = JSON.parse(body);
        // title
        console.log(movie.Title);
        // Year of release
        console.log("- Year of release: " + movie.Year);
        //  * IMDB Rating 
        console.log("- IMDB rating: " + movie.imdbRating);
        //  * Country where produced
        console.log("- Production location: " + movie.Country);
        //  * Movie language 
        console.log("- Language/s: " + movie.Language);
        //  * Movie plot 
        console.log("- Plot: " + movie.Plot);
        //  * Movie actors 
        console.log("- Actors: " + movie.Actors);
        //  * Rotten Tomatoes rating
        //  * Rotten Tomatoes URL
        console.log("- Website: " + movie.Website);

    } else if (totalMov = "") {
        console.log("nuttin here");

    }
});