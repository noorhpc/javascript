
const info = {
    emp_id: 1001,
    name: 'ali',
    age: 25,
    salary: 15000,


    display(){
        console.log(`'emp_id': ${this.emp_id},
            name: ${this.name},
            age: ${this.age},
            salary: ${this.salary},
            `);
    },

    

    addsalary(amount){
        this.salary += amount;
        return this.salary;
    },
    addage(newage){
        this.age += newage;
        return this.age;

    }

};

    //   ====again new example====


    const department ={

        roll: 'm01',
        dept_name:'IT',
        location:'karachi',


        display2(){
            console.log(`'roll':${this.roll},
                department: ${this.dept_name},
                location:${this.location},
                `);
        }




    };