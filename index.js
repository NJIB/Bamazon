
require('dotenv').config()

// Load the NPM Package inquirer
const inquirer = require('inquirer');

// Reference source code files
const DB = require('./DB');
let StockList = require("./bamazonCustomer");
let InventoryList = require("./bamazonManager");

// Display everything available to buy

//  Allow customer to select what they would like to buy, and what quantity
/**
 * @param {integer} item_ID
 * @param {integer} quantity
 */

async function run() {
    const db = new DB();
    await db.createConnection();

    inquirer.prompt([
        {
            type: 'list',
            name: 'userPath',
            message: 'Are you a Shopper or a Bamazon Staff Member ?',
            choices: ['Shopper', 'Staff Member'],
        }
    ])
        .then(function (inquirerResponse) {
            switch (inquirerResponse.userPath) {
                case 'Shopper':
                    customerShops(db);
                    break;
                case 'Staff Member':
                    managerView(db);
                    break;
            }
        });
}

async function customerShops(db) {
    const stockList = new StockList(db);
    await stockList.browseItems();

    // Give user the chance to continue shopping
    // const anotherPurchase = await 
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to buy something else?',
            name: 'anotherPurchase',
            choices: ['Yes', 'No'],
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

async function managerView(db) {
    const inventoryList = new InventoryList(db);
    await inventoryList.inventoryItems();
}


run();
