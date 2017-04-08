// require for my Twitter npm 
var Twitter = require('twitter');
// access to my Twitter 
var client = new Twitter({
    consumer_key: "VfW7sHZIZprrq7yfDWDsD6SZi",
    consumer_secret: "mdVkAV3YfzyAWgsySVcxhzpxYK9kIuwFKgoduyIj4ovJXRkItL",
    access_token_key: "2273609821-2DOGOcGXfHGFeT7O2aSoul7K7Y1w2OEeKqhxV3q",
    access_token_secret: "U2ZSHanmnxA8cyuml4XNBX5UxitpZuP6kNKpZ8ztWFBL1",
});
// var to get the user text after my-tweets
var twitterHandle = process.argv[3];
// var set to get Twitter handle
var params = {
    screen_name: twitterHandle
};
// getting the text and eliminating the rest
client.get('statuses/user_timeline/text', params, function(error, tweets, response) {
    // if no error and user type "my-tweets" after node and the file name...
    if (!error && process.argv[2] === "my-tweets") {

        // ...then of all the tweets, show the date and text parts (via for loop)
        // edited code from Brent Lewis to access Tweet obj
        for (var i = 0; i < tweets.length; i++) {
            // Lewis' formatting that add a ) and line breaks
            console.log('\n' + (i + 1) + ')   ' + tweets[i].created_at + ':\n' + '      "' + tweets[i].text + '"' + '\n');
        };
    }
});

// <<<<<SPOTIFY TXT FILE  
// Includes the FS package for reading and writing packages
var fs = require("fs");
// FOR MORE INFO, SEE: https: //docs.nodejitsu.com/articles/file-system/how-to-read-files-in-nodejs/
// Running the readFile module that's inside of fs.
// Stores the read information into the variable "data"
fs.readFile("random.txt", "utf8", function(err, data) {
    // Break the string down by comma separation and store the contents into the output array.
    var output = data.split(",");
    // Loop Through the newly created output array
    for (var i = 0; i < output.length; i++) {
        // Print each element (item) of the array/
        console.log(output[i]);
    }
});

// >>>>>>>>>>>>>>>>>>>SPOTIFY 
var spotify = require('spotify');
var song = process.argv;

// totalSong to receive all the user types
var totalSong = "";
// loop through each input
for (i = 2; i < song.length; i++) {
    // include everything the user types:
    totalSong = totalSong + " " + song[i];
}

spotify.search({
        type: 'track',
        query: song
    },
    function(err, data) {
        if (err) {
            // if there's an error, the show "error" with the error
            console.log('Error: ' + err);
            return;
            // otherwise, show the artists part of the returned object data
        } else console.log(data.tracks.items.artists);


    });


// <<<<<<<<MOVIE
// 1.	node liri.js movie-this '<movie name here>' ##
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