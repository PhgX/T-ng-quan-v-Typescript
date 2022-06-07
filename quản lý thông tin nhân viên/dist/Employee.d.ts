export declare enum Gender {
    MALE = "Male",
    FEMALE = "Female",
    OTHER = "Other"
}
export declare class Employee {
    _name: string;
    _gender: Gender;
    _dateOfBirth: string;
    _email: string;
    _phone: number;
    constructor(name: string, gender: Gender, dateOfBirth: string, email: string, phone: number);
    set name(name: string);
    get name(): string;
    set gender(gender: Gender);
    get gender(): Gender;
    set dateOfBirth(dateOfBirth: string);
    get dateOfBirth(): string;
    set email(email: string);
    get email(): string;
    set phone(phone: number);
    get phone(): number;
}
