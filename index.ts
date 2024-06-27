// import inquirer from "inquirer"; 
 
 
class  Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    public sayHello(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person = new Person("Anum",16 );
person.sayHello();


class Employee extends Person{
    salary: number;
    deparment: string;
    constructor( department: string,name: string, age: number, salary: number){
        super(name,age);
        this.deparment = department;
        this.salary = salary;
    }
    public sayHello(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am in the ${this.deparment} and my salary is ${this.salary}.`);
}
}
const employee = new Employee("IT department", "Anum", 16 , 50000);
employee.sayHello();
