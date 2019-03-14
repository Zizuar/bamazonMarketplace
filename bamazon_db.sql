-- DROP DATABASE IF EXISTS bamazondb;
-- CREATE DATABASE bamazondb;
USE bamazondb;

CREATE TABLE product(
    item_id INT(100) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INT(10) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO product(product_name, department_name, price, stock_quantity)
VALUES ("3/0x6/8 3/4-lt. Texas Star Mahogany", "WoodCraft", 3486, 258),
("3/0x8/0 3/4-lt. Texas Star Mahogany", "WoodCraft", 6856, 120),
("3/0x6/8 3/4-lt. Texas Star Knotty Alder", "KnotCraft", 3486, 211),
("3/0x8/0 3/4-lt. Texas Star Knotty Alder", "KnotCraft", 6856, 27),
("3/0x6/8 3/4-lt. Valencia Mahogany", "WoodCraft", 3486, 178),
("3/0x8/0 3/4-lt. Valencia Mahogany", "WoodCraft", 6856, 49),
("3/0x6/8 3/4-lt. Valencia Knotty Alder", "KnotCraft", 3486, 742),
("3/0x8/0 3/4-lt. Valencia Knotty Alder", "KnotCraft", 6856, 175),
("3/0x6/8 3/4 Macina Buffalo Forge Iron", "ThermaPlus", 12860, 425),
("3/0x8/0 3/4 Macina Buffalo Forge Iron", "ThermaPlus", 17288, 2),
("3/0x6/8 Full Madrid Buffalo Forge Iron", "ThermaPlus", 12330, 74),
("3/0x8/0 Full Madrid Buffalo Forge Iron", "ThermaPlus", 17128, 13);

CREATE TABLE department (
    department_id INT(100) AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    over_head_costs INT(100) NOT NULL,
    PRIMARY KEY(department_id)
);

INSERT INTO department(department_name, over_head_costs) 
VALUES ("WoodCraft", 1200), 
("ThermaPlus", 5600),
("KnotCraft", 500);

ALTER TABLE product ADD COLUMN product_sales INT DEFAULT 0 AFTER stock_quantity;

UPDATE product SET product_sales = 0 WHERE item_id = 0;