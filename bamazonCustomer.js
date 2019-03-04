var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "di3nMxdv",
        database: "bamazon_db"
    });

    connection.connect(function(err){
        if(err) throw err;
        itemList();
    });
        
function itemList(){
    connection.query("SELECT * FROM product", function(err, results){
        if(err) throw err;
        console.log("id:\t\tProduct\t\tDepartment\t\tPrice\t\tQuantity");
        console.log("=/\=========================================Bamazon=/\=Marketplace==========================/\=");
        for(let i = 0; i<results.length; i++){
        console.log(results[i].item_id +"\t\t"+ results[i].product_name +"\t\t"+ results[i].department_name +"\t\t"+results[i].price +"\t\t"+results[i].stock_quantity);
            }
        buyItem();
    });
}