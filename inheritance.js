
const info = {
    emp_id: 1001,
    name: 'ali',
    age: 25,
    salary: 15000,


    display: function(){

        console.log(`employ_id: ${this.emp_id},
            Name: ${this.name},
            Age: ${this.age},
            Salary: ${this.salary}`
        );

    },

    addsalary(amount){
        this.salary += amount;
        return this.salary;
    }

};