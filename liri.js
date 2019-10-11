require("dotenv").config();

const spotifykeys = require("./keys.js");
// const inquirer = require("inquirer");
const axios = require("axios");
const Spotify = require("node-spotify-api")
const fs = require("fs");

const spotify = new Spotify(keys.spotify);


// inquirer.prompt([
//     {
//         type: "input",
//         message: "What is your name?",
//         name: "username"
//     },
//     {
//         type: "password",
//         message: "Ser your password",
//         name: "password"
//     },
//     {
//         type: "input",
//         message: "whats your fevriote song",
//         name: "fav song"
//     }
// ])
// .then((inquirerResponse) => {
//     console.log(inquirerResponse.confirm) 
       
//     if(inquirerResponse.confirm){
//         console.log("\nWelcome" + inquirerResponse.username);
//        console.log("Your" + inquirerResponse, + "you song is ready\n");
//     }else {
//         console.log("\nYES " + inquirerResponse.username + ",come agin to see artist. \n")
//     }
// })

// function spotifyCall() {
//     spotify.search({
//         type: "Track",
//         query: userInput,
//     }), (err, data) => {
//         if (err){
//             return console.log('error something happen' + err);
//         }
//     }

//     const spotifyData = [
//         "TItle: " + data.tracks.items[0].name,
//         "Artist: " + data.tracks.items[0].album.artists,
//         "Album: " + data.tracks.items[0].album.name
//     ].join("\n\n");

//     console.log(spotifyData)
 
// }

const [node, file, ...args] = process.argv;

if (args[0] === "spotify-this-song") {
    if (args[1] === undefined){
        spotify("the sign")
    }else {
        const songTitle = args.slice(1).join("")
        spotify(songTitle)
    };
};

if (args[0] === "do what it says") {
    fs.readFile("random.text", "utf8", function(err, data){
        if (dataArr[0] === "spotify-this-song"){
            if(dataArr[1] === undefined){
                spotify("the sign")
            }else {
                spotify(dataArr[1])
            }
        }
    })
}

function spotifysong(songName){
    spotify.search({type: "track", query: songName, limit: 5}, function(err ,data){
        if(err){
            return console.log("errro ocured" + err);
        }

        data.tracks.items.forEach(element => {
            console.log("");
            console.log('artist: ${element.artist[0].name}');
            console.log("song: {songName}");
            console.log('Spotify preview link: ${element.preview_url');
            console.log('album: ${element.album.name');
        });
    })
}