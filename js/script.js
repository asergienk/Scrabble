/*
 Link to this assignment: https://asergienk.github.io/MultTable-Jquery-Slider-and-Tabs/
 GitHub repository link: https://asergienk.github.io/MultTable-Jquery-Slider-and-Tabs/
 91.61 Assignment: Scrabble Game
 Anna Sergienko, UMass Lowell Computer Science, anna_sergienko@student.uml.edu
 Copyright (c) 2020 by Anna Sergienko. All rights reserved. May be
 freely copied or excerpted for educational purposes with credit to the author.
 updated by AS on December 16, 2020 at 12:30 PM
 */


/* Array of all tiles */ 
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","blank"];

let tileRack = [];

/* Function to fill tile rack with 7 random letters from alphabet */ 
function fillTileRack (alphabet) {
    let tilesNeeded = 7 - tileRack.length;
    if(tilesNeeded > 0) {
        for(let i=0; i < tilesNeeded; i++) {
            /* Get a random integer and use it as an index to alphabet array to choose a tile */ 
            let randomNum = getRandomInt(alphabet.length);
            if(scrabblePieces(alphabet[randomNum].toUpperCase()).numberRemaining > 0) {
                tileRack.push(alphabet[randomNum].toUpperCase());
                scrabblePieces(alphabet[randomNum].toUpperCase()).numberRemaining--;
            }
            else {
                i--;
            }
        }
    }
    let tileRackContainer = document.getElementById("tileRack");
    tileRackContainer.innerHTML = "";
    /* For each chosen tile get the image to display on the rack */ 
    tileRack.forEach((tile, index)=>{
        let image = document.createElement("img");
        image.src = `./img/Scrabble_Tile_${tile}.jpg`;
        image.draggable = "true";
        image.addEventListener("dragstart", function(){
            drag(event);
        });
        image.dataset.points = scrabblePieces(tile).value;
        image.id = `tile_${tile}_${index}`;
        tileRackContainer.appendChild(image);
    })
    console.log(scrabblePieces(tileRack[0]));
}

/* Function to generate a random integer */ 
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function allowDrop(event) {
    event.preventDefault();
}

/* Function to enable drag */ 
function drag (event) {
    console.log(event.target.id);
    event.dataTransfer.setData("text", event.target.id);
}

/* Function to enable drop */ 
function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    getPoints();
}

/* Function to calculate points for each game */ 
function getPoints(){
    let parents = document.querySelectorAll("#board>div");
    let points = 0;
    let count = 0;
    console.log(parents);
    for(let i=0; i< parents.length; i++) {
        points += !parents[i].children[0]? 0 : parseInt(parents[i].children[0].dataset.points);
        count += !parents[i].children[0]? 0 : 1;
    }
    if(count >= 6) {
        points = points*2*2;
    }
    else if (count >= 2) {
        points = points*2;
    }
    let container = document.getElementById("points");
    container.innerHTML = points;
}

/* On click "Next Word" fill in the rack with missing tiles */ 
let nextWord = document.getElementById("nextWord");
nextWord.addEventListener("click", e => {
    let parents = document.querySelectorAll("#board>div");
    for(let i=0; i< parents.length; i++) {
        if(parents[i].children.length > 0) {
            let index = tileRack.indexOf(parents[i].children[0].id[5]);
            if(index > -1) {
                tileRack.splice(index, 1);
            }
        }
       parents[i].innerHTML = "";
    }
    console.log(tileRack.length);
    fillTileRack(alphabet);
});

/* On click "Start Over" fill in the rack with new 7 random tiles */ 
let startOver = document.getElementById("startOver");
startOver.addEventListener("click", e => {
    let parents = document.querySelectorAll("#board>div");
    for(let i=0; i< parents.length; i++) {
       parents[i].innerHTML = "";
    }
    tileRack = [];
    resetScrabblePieces();
    fillTileRack(alphabet);
    getPoints();
});

fillTileRack(alphabet);
getPoints();