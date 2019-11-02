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
  async browseItems() {
    const items = await this.dbConn.getAllItems();
    const item = await inquirer.prompt(
        {
          name: 'answer',
          message: 'What you want to buy?',
          type: 'list',
          choices: items.map((it) => `${it.product_name}`)
          // choices: items.map((it) => `${it.product_name} ($${it.price})`),
        }
    );

    const purchaseQuantity = await inquirer.prompt(
        {
          name: 'answer',
          message: 'How many would you like?',
        }
    );

    const selectedItem = items.find((it) => it.product_name == item.answer);
    if (selectedItem.stock_quantity < purchaseQuantity.answer) {
        console.log(`Sorry, there are not ${purchaseQuantity.answer} available to buy at this time.`);
    } else {
        let newStockQuantity = (selectedItem.stock_quantity - purchaseQuantity.answer);
        console.log(`New stock quantity: ${newStockQuantity}`)
        await this.dbConn.updateStockQuantity(item.answer, newStockQuantity);
        console.log(`Congratulations - you have just bought ${purchaseQuantity.answer} ${item.answer}(s)!`);  
    }
    
    return;
  }
}

module.exports = StockList;
