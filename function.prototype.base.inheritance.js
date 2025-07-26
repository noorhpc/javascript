// alert("Hello, World!");

// function constructor or function prototype based inheritance

// function Employee(id, name, age, salary) {
//     this.emp_id = id;
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }


// // function base Inheritance
// Employee.prototype.print = function() {
//     console.log(`Employee ID: ${this.emp_id}, 
//         Name: ${this.name}, 
//         Age: ${this.age}, 
//         Salary: ${this.salary}`
//     );
// };

// // instances // objects
// let emp1 = new Employee(101, 'John Doe', 25, 15000);
// emp1.print();
// let emp2 = new Employee(102, 'Jane Smith', 30, 20000);
// // let emp3 = new Employee(103, 'Sam Wilson', 28, 18000);




         ====== bank account inheritance ======

        function Person(accountIBAN_number, accountNumber, accountTitle, accountType, accountBalance) {
    this.accountIBAN_number = accountIBAN_number;
    this.accountNumber = accountNumber;
    this.accountTitle = accountTitle;
    this.accountType = accountType;
    this.accountBalance = accountBalance;
}


Person.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.accountBalance += amount; //  this.accountBalance =  this.accountBalance + amount
        console.log(`Deposited ${amount}. New balance: ${this.accountBalance}`);
    } else {
        console.log("Invalid deposit amount. Must be positive.");
    }
};


Person.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.accountBalance) {
        this.accountBalance -= amount;
        console.log(`Withdrawn ${amount}. Remaining balance: ${this.accountBalance}`);
    } else if (amount > this.accountBalance) {
        console.log("Insufficient funds.");
    } else {
        console.log("Invalid withdrawal amount.");
    }
};


Person.prototype.printDetails = function() {
    console.log(`Account Title: ${this.accountTitle}`);
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`IBAN Number: ${this.accountIBAN_number}`);
    console.log(`Account Type: ${this.accountType}`);
    console.log(`Account Balance: ${this.accountBalance}`);
};


let user1 = new Person("PK24XXXXXXXXXXXXXXXXXXXXXX", "1234567890123456", "John Doe", "Savings", 5000);
user1.deposit(1000);
user1.withdraw(300);
user1.printDetails();