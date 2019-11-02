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
    var table = new Table({
      head: ['Product', 'Department', 'Price', '# in Stock']
      , colWidths: [20, 20, 10, 10]
    });

    const items = await this.dbConn.getAllItems();

const vals = items.map((el) => Object.values(el));

table.push(...vals);

      console.log(table.toString());
    }
}

module.exports = InventoryList;
