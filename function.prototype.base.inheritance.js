alert("Hello, World!");

// function constructor or function prototype based inheritance

function factory(name, age, city, number){
    this.name = name;
    this.age = age;
    this .city = city;
    this.number = number;
}
factory.prototype.print = function (){
    console.log(`name : ${this.name},
        age: ${this.age},
        city:${this.city},
        number: ${this.number};
        `);

};  

let emp1 = new factory('ali', 30, 'karachi',  03423028330 );
let emp2 = new factory('Ahmed', 25, 'Lahore',  03423028331 );
let emp3 = new factory('Sara', 28, 'Islamabad',  03423028332 );

emp1.print();
emp2.print();
emp3.print();











//          ====== bank account inheritance ======

//         function Person(accountIBAN_number, accountNumber, accountTitle, accountType, accountBalance) {
//     this.accountIBAN_number = accountIBAN_number;
//     this.accountNumber = accountNumber;
//     this.accountTitle = accountTitle;
//     this.accountType = accountType;
//     this.accountBalance = accountBalance;
// }


// Person.prototype.deposit = function(amount) {
//     if (amount > 0) {
//         this.accountBalance += amount; //  this.accountBalance =  this.accountBalance + amount
//         console.log(`Deposited ${amount}. New balance: ${this.accountBalance}`);
//     } else {
//         console.log("Invalid deposit amount. Must be positive.");
//     }
// };


// Person.prototype.withdraw = function(amount) {
//     if (amount > 0 && amount <= this.accountBalance) {
//         this.accountBalance -= amount;
//         console.log(`Withdrawn ${amount}. Remaining balance: ${this.accountBalance}`);
//     } else if (amount > this.accountBalance) {
//         console.log("Insufficient funds.");
//     } else {
//         console.log("Invalid withdrawal amount.");
//     }
// };


// Person.prototype.printDetails = function() {
//     console.log(`Account Title: ${this.accountTitle}`);
//     console.log(`Account Number: ${this.accountNumber}`);
//     console.log(`IBAN Number: ${this.accountIBAN_number}`);
//     console.log(`Account Type: ${this.accountType}`);
//     console.log(`Account Balance: ${this.accountBalance}`);
// };


// let user1 = new Person("PK24XXXXXXXXXXXXXXXXXXXXXX", "1234567890123456", "John Doe", "Savings", 5000);
// user1.deposit(1000);
// user1.withdraw(300);
// user1.printDetails();