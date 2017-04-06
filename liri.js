// 2.	At the top of the liri.js file, write the code you need to grab 
// the data from keys.js. Then store the keys in a variable.
// 3.	Make it so liri.js can take in one of the following commands:
// •	my-tweets
// •	spotify-this-song
// •	movie-this
// •	do-what-it-says
//VAR KEYS not working yet
var keys = require("./keys.js");

/* Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year 
it was created*/
var movName = process.argv;
// totalMov to receive all the user types
var totalMov = "";
// loop through each input
for (i=2; i<movName.length; i++ ){
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
  var movie=JSON.parse(body);
  // title
    console.log(movie.Title);
    // Year of release
    console.log("- Year of release: " + movie.Year);
    //  * IMDB Rating 
      console.log("- IMDB rating: " + movie.imdbRating); 
	  //  * Country where produced
    console.log("- Production location: "+ movie.Country);
	  //  * Movie language 
     console.log("- Language/s: " + movie.Language);
	  //  * Movie plot 
    console.log("- Plot: " + movie.Plot); 
	  //  * Movie actors 
    console.log("- Actors: " + movie.Actors);  
	  //  * Rotten Tomatoes rating
	  //  * Rotten Tomatoes URL
    console.log("- Website: " + movie.Website);  

  }
   else if (totalMov = "") {
console.log("nuttin here");

 } 
});