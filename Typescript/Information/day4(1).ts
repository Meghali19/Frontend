export class Employee{
    employeeId:number;
    employeeName:string;
    employeeAge:string;

    constructor(employeeId:number,employeeName:string,employeeAge:string){

        this.employeeId=employeeId;
        this.employeeName=employeeName;
        this.employeeAge=employeeAge

    }
       

    public display(){
        console.log(`
            Employee Id            ::${this.employeeId}
            Employee Name          ::${this.employeeName}
            Employee Age           ::${this.employeeAge}
        `)
    }

}


export function displayEmployeeDetails(){
    console.log("Office time is 8 AM")
    
}