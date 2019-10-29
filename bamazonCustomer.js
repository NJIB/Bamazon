
// Load the NPM Package inquirer
const inquirer = require('inquirer');

// Reference source code files
let itemSearch = require("./DB.js");

// Declare 
let guessesRemaining = 10;
let incorrectGuesses = [];
let correctGuesses = [];

// Display everything available to buy

//  Allow customer to select what they would like to buy, and what quantity
/**
 * @param {integer} item_ID
 * @param {integer} quantity
 */
function customerShops() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What would you like to buy?  (Enter item ID) ',
                name: 'item_ID',
            },
            {
                type: 'input',
                message: 'How many would you like to buy?',
                name: 'purchase_quantity',
            }
        ])
        .then(function (inquirerResponse) {
            itemSearch(inquirerResponse.item_ID, inquirerResponse.purchase_quantity);
        }
        );
}

/**
 * @param {function} guessLetter
 * @param {string} letterGuessed
 */
function guessLetter() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Guess a letter: ',
                name: 'letterGuessed',
            }
        ])
        .then(function (inquirerResponse) {
            console.log(`You guessed ${inquirerResponse.letterGuessed} !`)


            charReturned = new Letter(inquirerResponse.letterGuessed);
            

        }
        );
}

import_random_words();
