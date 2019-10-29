DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity SMALLINT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO `bamazon_db`.`products` (`product_name`, `department_name`, `price`, `stock_quantity`)
VALUES ('XBox', 'Electronics', '550', '20');

SELECT * FROM products;
