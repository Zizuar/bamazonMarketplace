var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "di3nMxdv",
        database: "bamazon_db"
    });

