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
  async getBidFromUser() {
    const items = await this.dbConn.getAllItems();
    const item = await inquirer.prompt(
        {
          name: 'answer',
          message: 'How many do you want to buy?',
          type: 'list',
          choices: items.map((it) => `${it.product_name}`),
        }
    );

    const bid = await inquirer.prompt(
        {
          name: 'answer',
          message: 'What is your bid (US $):',
        }
    );

    const targetItem = items.find((it) => it.item_name == item.answer);
    if (targetItem.highest_bid < bid.answer) {
      await this.dbConn.updateItemWithBid(item.answer, bid.answer);
      console.log(`You have the highest bid $${bid.answer} on: ${item.answer}`);
    } else {
      console.log(`Your bid of $${bid.answer} was not high enough.`);
    }

    return;
  }
}

module.exports = StockList;
