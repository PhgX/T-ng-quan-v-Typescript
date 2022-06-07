"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["MALE"] = "Male";
    Gender["FEMALE"] = "Female";
    Gender["OTHER"] = "Other";
})(Gender = exports.Gender || (exports.Gender = {}));
class Employee {
    constructor(name, gender, dateOfBirth, email, phone) {
        this._gender = Gender.OTHER;
        this._name = name;
        this._gender = gender;
        this._dateOfBirth = dateOfBirth;
        this._email = email;
        this._phone = phone;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get gender() {
        return this._gender;
    }
    set dateOfBirth(dateOfBirth) {
        this._dateOfBirth = dateOfBirth;
    }
    get dateOfBirth() {
        return this._dateOfBirth;
    }
    set email(email) {
        this._email = email;
    }
    get email() {
        return this._email;
    }
    set phone(phone) {
        this._phone = phone;
    }
    get phone() {
        return this._phone;
    }
}
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map