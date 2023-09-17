import { Person } from "./Person";

class Employee extends Person{
    id:number;
    salary:number;

    override talk(): void {
        console.log("Im a student");
    }

}

let employee = new Employee;
employee.name="Meghali";
employee.age=22;
employee.gender="female";
employee.id = 201;
employee.salary = 30000

console.log(employee);
employee.talk();