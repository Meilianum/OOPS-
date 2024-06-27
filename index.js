// import inquirer from "inquirer"; 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var person = new Person("Anum", 16);
person.sayHello();
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(department, name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.deparment = department;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.sayHello = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old. I am in the ").concat(this.deparment, " and my salary is ").concat(this.salary, "."));
    };
    return Employee;
}(Person));
var employee = new Employee("IT department", "Anum", 16, 50000);
employee.sayHello();
