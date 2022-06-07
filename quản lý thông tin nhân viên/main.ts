import { Employee, Gender } from "./Employee";
import { EmployeeManager } from "./EmployeeManager";

let nhanvien1 = new Employee ('Lê Thị Hằng', Gender.FEMALE, '13/2/2001', 'hang_le@gmail.com', 9877645224)
let nhanvien2 = new Employee ('Lê Thị Nhàn', Gender.FEMALE, '23/9/2001', 'nhan@gmail.com', 9877655224)
let nhanvien3 = new Employee ('Nguyễn Thành Long', Gender.MALE, '03/2/2001', 'long@gmail.com', 9877123224)
let nhanvien4 = new Employee ('Trần Đông Nam', Gender.MALE, '09/8/2002', 'nam_tran@gmail.com', 9870095224)

let employeeManger = new EmployeeManager();
employeeManger.addNewEmployee(nhanvien1,nhanvien2,nhanvien3,nhanvien4);
console.log(employeeManger.getList());
console.log(`-------------`)

employeeManger.deleteEmployeeByName('Lê Thị Nhàn')
console.log(employeeManger.getList())
console.log(`-------------`)
console.log(`-------------`)


employeeManger.deleteEmployeeByIndex(2)
console.log(employeeManger.getList())
console.log(`-------------`)
console.log(`-------------`)
console.log(`-------------`)

