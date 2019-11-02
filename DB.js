// Add code to read and set any environment variables with the dotenv package
require("dotenv").config();

// Add the code required to import the keys.js file and store it in a variable. */
var password = require("./keys.js");

/**
 * @see {@link https://www.npmjs.com/package/promise-mysql}
 */
const mysql = require('promise-mysql');

/**
 * Bring DB config in from separate file
 * to keep logic clean.
 */
const conf = require('./config.js');

/**
 * A DB connection with the needed queries
 */
class DB {
  /**
   * Creates a connection if one does not already exist
   * @return {Promise} the connection object
 */
  async createConnection() {
    if (this.conn) return this.conn;
    this.conn = await mysql.createConnection(conf);
    return this.conn;
  }

  /**
 * Reads all items from the auctions table
 * @return {Promise}
 */
  async getAllItems() {
    return this.conn.query(
      'SELECT product_name, department_name, price, stock_quantity FROM products',
      );
  }

  updateStockQuantity(itemName, newStockQuantity) {
    return this.conn.query(
        'UPDATE products SET ? WHERE ?',
        [
          {
            stock_quantity: newStockQuantity,

          },
          {
            product_name: itemName,

          },
        ]);
  }

}

module.exports = DB;


