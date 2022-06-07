"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManager = void 0;
class EmployeeManager {
    constructor() {
        this.employees = [];
    }
    addNewEmployee(...employee) {
        this.employees.push(...employee);
    }
    getList() {
        return this.employees;
    }
    deleteEmployeeByIndex(index) {
        return this.employees.splice(index - 1, 1);
    }
    findEmployee(name) {
        let i = -1;
        for (let person of this.employees) {
            if (person._name === name) {
                i = this.employees.indexOf(person);
            }
        }
        return i;
    }
    deleteEmployeeByName(name) {
        let deleteIndex = this.findEmployee(name);
        if (deleteIndex !== -1) {
            this.employees.splice(deleteIndex, 1);
        }
        else {
            throw new Error(`Nhân viên không tồn tại`);
        }
    }
}
exports.EmployeeManager = EmployeeManager;
//# sourceMappingURL=EmployeeManager.js.map