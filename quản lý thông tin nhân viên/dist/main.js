"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("./Employee");
const EmployeeManager_1 = require("./EmployeeManager");
let nhanvien1 = new Employee_1.Employee('Lê Thị Hằng', Employee_1.Gender.FEMALE, '13/2/2001', 'hang_le@gmail.com', 9877645224);
let nhanvien2 = new Employee_1.Employee('Lê Thị Nhàn', Employee_1.Gender.FEMALE, '23/9/2001', 'nhan@gmail.com', 9877655224);
let nhanvien3 = new Employee_1.Employee('Nguyễn Thành Long', Employee_1.Gender.MALE, '03/2/2001', 'long@gmail.com', 9877123224);
let nhanvien4 = new Employee_1.Employee('Trần Đông Nam', Employee_1.Gender.MALE, '09/8/2002', 'nam_tran@gmail.com', 9870095224);
let employeeManger = new EmployeeManager_1.EmployeeManager();
employeeManger.addNewEmployee(nhanvien1, nhanvien2, nhanvien3, nhanvien4);
console.log(employeeManger.getList());
console.log(`-------------`);
employeeManger.deleteEmployeeByName('Lê Thị Nhàn');
console.log(employeeManger.getList());
console.log(`-------------`);
console.log(`-------------`);
employeeManger.deleteEmployeeByIndex(2);
console.log(employeeManger.getList());
console.log(`-------------`);
console.log(`-------------`);
console.log(`-------------`);
//# sourceMappingURL=main.js.map