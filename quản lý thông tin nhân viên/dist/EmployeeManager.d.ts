import { Employee } from "./Employee";
export declare class EmployeeManager {
    employees: Employee[];
    constructor();
    addNewEmployee(...employee: Employee[]): void;
    getList(): Employee[];
    deleteEmployeeByIndex(index: number): Employee[];
    protected findEmployee(name: string): number;
    deleteEmployeeByName(name: string): void;
}
