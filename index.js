
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

            const stockList = new StockList(db);
            stockList.getBidFromUser();
        }
        );
}

run();
