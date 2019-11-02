const inquirer = require('inquirer');
var Table = require('cli-table');

/**
 */
class InventoryList {
  /**
     * @param {Object} dbConn db connection object
     */
  constructor(dbConn) {
    this.dbConn = dbConn;
  }

  /**
   *
   */
  async inventoryItems() {
    const items = await this.dbConn.getAllItems();

    console.log(items.map((it) => `${it.product_name}`));

    var table = new Table({
      head: ['ID', 'Product', 'Department', 'Price', '# in Stock']
      , colWidths: [10, 20, 20, 10, 10]
    });

    // table is an Array, so you can `push`, `unshift`, `splice` and friends
    table.push([
      [(items.map((it) => `${it.item_ID}`))],
      [(items.map((it) => `${it.product_name}`))],
      [(items.map((it) => `${it.department_name}`))],
      [(items.map((it) => `${it.price}`))],
      [(items.map((it) => `${it.stock_quantity}`))]
    ]);

    console.log(table.toString());
  }
}

module.exports = InventoryList;
