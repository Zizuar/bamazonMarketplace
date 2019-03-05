var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection(
    {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "di3nMxdv",
        database: "bamazon"
    }
);

connection.connect(function(err){
    if(err) throw err;
});

inquirer.prompt([
    {
      type: 'list',
      name: 'updatetable',
      message: 'Manager Options:',
      choices: [
        'View Products for Sale',
        'View Low Inventory',
        'Add to Inventory',
        'Add New Product'
      ]
    }
]).then(response => {
    if(response.updatetable === 'View Products for Sale'){
        connection.query("SELECT item_id, product_name, price,stock_quantity FROM product",
        function(err,results){
            if(err) throw err;
            console.log("id:\tProduct\t\t\tPrice\t\tQuantity");
            console.log("=/\=======================Manager=/\=Bamazon=/\=Console==========================/\=");
            for(let i = 0; i<results.length; i++){
                console.log(results[i].item_id +"\t"+ results[i].product_name +"\t\t"+results[i].price +"\t\t"+results[i].stock_quantity);
            }
        });
        connection.end();
    }else if(response.updatetable === "View Low Inventory"){
        connection.query("SELECT item_id, product_name, price,stock_quantity FROM product WHERE stock_quantity <= 5",
        function(err,results){
            if(err) throw err;
            console.log("id:\t\tProduct\t\tPrice\t\tQuantity");
            console.log("=/\=======================Manager=/\=Bamazon=/\=Console==========================/\=");
            for(let i = 0; i<results.length; i++){
                console.log(results[i].item_id +"\t\t"+ results[i].product_name +"\t\t"+results[i].price +"\t\t"+results[i].stock_quantity);
            }
        });
        connection.end();
    }else if (response.updatetable === "Add to Inventory"){
        inquirer.prompt([
            {
                type: "input",
                name: "productId",
                message: "Please enter product id to edit available inventory.",
            },
            {
                type: "input",
                name: "productquantity",
                message: "Please enter product stock quantity:",
                validate: function(value){
                    if(!isNaN(parseFloat(value))){
                        return true;
                    }
                    return "Invalid Entrry";
                }
            }
        ]).then(response => {
            connection.query("SELECT stock_quantity FROM product WHERE item_id = ?", [response.productId],
            function(err,results){
                if(err) throw err;
                var quantity = parseInt(results[0].stock_quantity);
                var updatedQuantity = parseInt(response.productquantity) + quantity;
                connection.query(
                "UPDATE product SET ? WHERE ?",
                [{stock_quantity:updatedQuantity}, {item_id:response.productId}],
                function(err){if(err) throw err;});
                console.log(`New Quantity is updated for Item Id: ${response.productId}`);
        });
         //connection.end();
        });
    }else if (response.updatetable === "Add New Product"){
        inquirer.prompt([
            {
                type: "input",
                name: "productName",
                message: "New product descriptive name:",
            },
            {
                type: "input",
                name: "departmentName",
                message: "New product primary department or line:",
            },
            {
                type: "input",
                name: "price",
                message: "New product MSRP or Sales Price:",
                validate: function(value){
                    if(!isNaN(parseFloat(value))){
                        return true;
                    }
                    return "Invalid Entry";
                }
            },
            {
                type: "input",
                name: "productquantity",
                message: "Quantity of new product in stock:",
                validate: function(value){
                    if(!isNaN(parseFloat(value))){
                        return true;
                    }
                    return "Please enter valid product quantity";
                }
            }
        ]).then(response => {
            connection.query("INSERT INTO product SET ?",
            {
                product_name: response.productName,
                department_name:response.departmentName,
                price: response.price, 
                stock_quantity: response.productquantity
            },
            function(err, result){
                if(err) throw err;
                console.log(`New Product inserted`);
            });
            connection.end();
        })
    }
});