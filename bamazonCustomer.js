var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "di3nMxdv",
        database: "bamazondb",
    });

    connection.connect(function(err){
        if(err) throw err;
        itemList();
    });
        
function itemList(){
    connection.query("SELECT * FROM product", function(err, results){
        if(err) throw err;
        console.log("id:\t\t\tProduct\t\t\t\t\tDepartment\t\tPrice\t\tQuantity");
        console.log("=/\==============================================Bamazon=/\=Marketplace=========================================/\=");
        for(let i = 0; i<results.length; i++){
        console.log(results[i].item_id +"\t"+ results[i].product_name +"\t\t\t"+ results[i].department_name +"\t\t"+results[i].price +"\t\t"+results[i].stock_quantity);
            }
        buyItem();
    });
}

function buyItem(){
    inquirer.prompt([
        {   
            message: "Please indicate the id # of the product you wish to purchase...",
            name: "cartItem",
            type: "input",
            validate: function(value){
                if(!isNaN(parseInt(value))){
                    return true;
                }
                return "Invalid Entry"
            }
        },
        {
            message: "What quantity of this item would you like to buy?",
            name: "quantity",
            type: "input",
            validate: function(value){
                if(!isNaN(parseInt(value))){
                    return true;
                }
                return "Invalid Entry"
            }
        }
    ]).then(function(response){
        connection.query("SELECT item_id, price FROM product WHERE item_id = ?",
            [response.buyId], 
            function(err, results){
                if(err) throw err;
                    console.log(response.quantity);
                    connection.query("UPDATE product SET ?, ? WHERE ?",
                    [
                        {item_id:response.buyId},
                    ],
                    function(err){
                        if(err) throw err;
                        console.log("Your cart total today is " + $$,(results[0].price) * response.quantity);
                    });
                    connection.end();
                }else{
                    console.log("Your requested item is currently out of stock. Please check back later!")
                    connection.end();
                }
        });
    });
};