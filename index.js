
require('dotenv').config()

// Load the NPM Package inquirer
const inquirer = require('inquirer');

// Reference source code files
const DB = require('./DB');
let StockList = require("./bamazonCustomer");

// Display everything available to buy

//  Allow customer to select what they would like to buy, and what quantity
/**
 * @param {integer} item_ID
 * @param {integer} quantity
 */

async function run() {
    const db = new DB();
    await db.createConnection();


    
    customerShops(db, 0);
}

async function customerShops(db) {
    const stockList = new StockList(db);
    await stockList.browseItems();

    // Give user the chance to continue shopping
    // const anotherPurchase = await 
    inquirer.prompt([
        {
            name: 'list',
            message: 'Would you like to buy something else (Y, N) ?',
            name: 'anotherPurchase',
            choices: ('Yes', 'No'),
        }
    ])
        .then(function (inquirerResponse) {
            switch (inquirerResponse.anotherPurchase.toLowerCase()) {
                case 'y':
                    customerShops(db);
                    break;
                case 'n':
                    console.log("Thanks for shopping!")
                    return;
                    break;
            }
        });
}

run();
