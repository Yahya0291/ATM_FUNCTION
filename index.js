import inquirer from "inquirer";
let myBalance = 10000;
let myPIN = 1234;
console.log("You have Ten Thousand Dollers (10,000) in your account!");
let askPIN = await inquirer.prompt([
    {
        name: "PIN",
        message: "Please Enter you PIN Code!",
        type: "number"
    }
]);
if (askPIN.PIN === myPIN) {
    console.log("The PIN is correct!");
    let askOpt = await inquirer.prompt([
        {
            name: "atmopt",
            message: "Please chose the following!",
            type: "list",
            choices: ["withdraw", "Balance Inquiry"]
        }
    ]);
    //console.log(askOpt);
    if (askOpt.atmopt === "withdraw") {
        let askamount = await inquirer.prompt([
            {
                name: "amount",
                message: "Please Enter the Amount",
                type: "number"
            }
        ]);
        if (askamount.amount > myBalance) {
            console.log("Insufficent Balance");
        }
        else {
            myBalance -= askamount.amount;
            console.log("your remaining balance is " + myBalance);
        }
    }
    else if (askOpt.atmopt === "Balance Inquiry") {
        console.log("your current balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect PIN!");
}
