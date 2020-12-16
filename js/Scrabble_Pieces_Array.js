/*
 Link to this assignment:  https://asergienk.github.io/Scrabble/
 GitHub repository link: https://github.com/asergienk/Scrabble
 91.61 Assignment: Scrabble Game
 Anna Sergienko, UMass Lowell Computer Science, anna_sergienko@student.uml.edu
 Copyright (c) 2020 by Anna Sergienko. All rights reserved. May be
 freely copied or excerpted for educational purposes with credit to the author.
 updated by AS on December 16, 2020 at 12:30 PM
 */
 
var ScrabbleTiles = {} ;
ScrabbleTiles["A"] = { "value" : 1,  "originalDistribution" : 9,  "numberRemaining" : 9  } ;
ScrabbleTiles["B"] = { "value" : 3,  "originalDistribution" : 2,  "numberRemaining" : 2  } ;
ScrabbleTiles["C"] = { "value" : 3,  "originalDistribution" : 2,  "numberRemaining" : 2  } ;
ScrabbleTiles["D"] = { "value" : 2,  "originalDistribution" : 4,  "numberRemaining" : 4  } ;
ScrabbleTiles["E"] = { "value" : 1,  "originalDistribution" : 12, "numberRemaining" : 12 } ;
ScrabbleTiles["F"] = { "value" : 4,  "originalDistribution" : 2,  "numberRemaining" : 2  } ;
ScrabbleTiles["G"] = { "value" : 2,  "originalDistribution" : 3,  "numberRemaining" : 3  } ;
ScrabbleTiles["H"] = { "value" : 4,  "originalDistribution" : 2,  "numberRemaining" : 2  } ;
ScrabbleTiles["I"] = { "value" : 1,  "originalDistribution" : 9,  "numberRemaining" : 9  } ;
ScrabbleTiles["J"] = { "value" : 8,  "originalDistribution" : 1,  "numberRemaining" : 1  } ;
ScrabbleTiles["K"] = { "value" : 5,  "originalDistribution" : 1,  "numberRemaining" : 1  } ;
ScrabbleTiles["L"] = { "value" : 1,  "originalDistribution" : 4,  "numberRemaining" : 4  } ;
ScrabbleTiles["M"] = { "value" : 3,  "originalDistribution" : 2,  "numberRemaining" : 2  } ;
ScrabbleTiles["N"] = { "value" : 1,  "originalDistribution" : 6,  "numberRemaining" : 6  } ;
ScrabbleTiles["O"] = { "value" : 1,  "originalDistribution" : 8,  "numberRemaining" : 8  } ;
ScrabbleTiles["P"] = { "value" : 3,  "originalDistribution" : 2,  "numberRemaining" : 2  } ;
ScrabbleTiles["Q"] = { "value" : 10, "originalDistribution" : 1,  "numberRemaining" : 1  } ;
ScrabbleTiles["R"] = { "value" : 1,  "originalDistribution" : 6,  "numberRemaining" : 6  } ;
ScrabbleTiles["S"] = { "value" : 1,  "originalDistribution" : 4,  "numberRemaining" : 4  } ;
ScrabbleTiles["T"] = { "value" : 1,  "originalDistribution" : 6,  "numberRemaining" : 6  } ;
ScrabbleTiles["U"] = { "value" : 1,  "originalDistribution" : 4,  "numberRemaining" : 4  } ;
ScrabbleTiles["V"] = { "value" : 4,  "originalDistribution" : 2,  "numberRemaining" : 2  } ;
ScrabbleTiles["W"] = { "value" : 4,  "originalDistribution" : 2,  "numberRemaining" : 2  } ;
ScrabbleTiles["X"] = { "value" : 8,  "originalDistribution" : 1,  "numberRemaining" : 1  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "originalDistribution" : 2,  "numberRemaining" : 2  } ;
ScrabbleTiles["Z"] = { "value" : 10, "originalDistribution" : 1,  "numberRemaining" : 1  } ;
ScrabbleTiles["BLANK"] = { "value" : 0,  "originalDistribution" : 2,  "numberRemaining" : 2  } ;


function scrabblePieces (letter) {
    return ScrabbleTiles[letter];
}

function resetScrabblePieces() {
    for(const[key, value] of Object.entries(ScrabbleTiles)) {
        value.numberRemaining = value.originalDistribution;
    }
}