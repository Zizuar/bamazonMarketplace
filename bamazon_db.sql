DROP DATABASE IF EXISTS bamazondb;
CREATE DATABASE bamazondb;
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
("3/0x6/8 3/4-lt. Texas Star Knotty Alder", "WoodCraft", 3486, 211),
("3/0x8/0 3/4-lt. Texas Star Knotty Alder", "WoodCraft", 6856, 27),
("3/0x6/8 3/4-lt. Valencia Mahogany", "WoodCraft", 3486, 178),
("3/0x8/0 3/4-lt. Valencia Mahogany", "WoodCraft", 6856, 49),
("3/0x6/8 3/4-lt. Valencia Knotty Alder", "WoodCraft", 3486, 742),
("3/0x8/0 3/4-lt. Valencia Knotty Alder", "WoodCraft", 6856, 175),
("3/0x6/8 3/4 Macina Buffalo Forge Iron", "ThermaPlus", 12860, 425),
("3/0x8/0 3/4 Macina Buffalo Forge Iron", "ThermaPlus", 17288, 2),
("3/0x6/8 Full Madrid Buffalo Forge Iron", "ThermaPlus", 12330, 74),
("3/0x8/0 Full Madrid Buffalo Forge Iron", "ThermaPlus", 17128, 13)