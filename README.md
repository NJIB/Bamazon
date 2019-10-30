# Bamazon!

Bamazon! is a server-side application leverage a number of different libraries and packages.  It leverages Node.js as the primary interface, reads from and makes updates to a MySQL database, and uses an number of different plug-in packages to enhance the user experience (CLI Table and Inquirer).

The application is divided up into a logical collection of component files, aimed to improve readability.  The application is launched from the index.js file (by entering 'node index.js').  Upon launch, the application reads from the database, and offers up to the user a list of available products in the database - asking the user what they would like to buy, and what quantity.

	- If the quantity requested is less than or equal to the stock available, the user is congratulated on their purchase, and the stock quantity available is updated in the database.
  
	- If the quantity requested exceeds the stock available, the user is informed that that quantity is not currently available.

After each purchase, the user is given the option to make another purchase.

The application is designed so that database passwords are kept secure, using the 'dotenv' add-on.
To go directly to the page, follow this link:  https://github.com/NJIB/Bamazon
