const inquirer = require('inquirer');

/**
 */
class StockList {
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
    await this.dbConn.getAllItems();
}

module.exports = StockList;
