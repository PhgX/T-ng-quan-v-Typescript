import { Employee } from "./Employee";

export class EmployeeManager {
    employees : Employee [] = [];
    constructor (){}

    addNewEmployee(...employee : Employee []) : void {
       this.employees.push(...employee)
    }

    getList(){
        return this.employees;
    }

    deleteEmployeeByIndex(index: number){
        return this.employees.splice(index - 1, 1);        
    }

    protected findEmployee(name: string){
        let i = -1;
        for(let person of this.employees){
            if(person._name === name){
                i = this.employees.indexOf(person)
            }
        }
        return i;
    }

    deleteEmployeeByName(name : string){
        let deleteIndex = this.findEmployee(name)
        if(deleteIndex !== -1){
            this.employees.splice(deleteIndex, 1)
        } else {
            throw new Error (`Nhân viên không tồn tại`)
        }
    } 

    // getList() {
    //     let gioitinh;
    //     for(let person of this.employees){
    //         if(person._gender){
    //             gioitinh = 'Nam'
    //         } else {
    //             gioitinh = 'Nữ'
    //         }
    //     }
    //     return `Họ và tên: ${this.employees.person.name}, Giới tính: ${gioitinh}, 
    //     Ngày sinh: ${this.dateOfBirth}, Email: ${this.email}, Phone: ${this.phone}`;
    //   }  
    
}








