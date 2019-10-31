const inquirer = require('inquirer');

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
        await this.dbConn.getAllItems();
    }
}

module.exports = InventoryList;
