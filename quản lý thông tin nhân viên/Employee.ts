export enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other' 
}

export class Employee {
    _name: string;
    _gender: Gender = Gender.OTHER;
    _dateOfBirth: string;
    _email: string;
    _phone: number;
    constructor(
      name: string,
      gender: Gender,
      dateOfBirth: string,
      email: string,
      phone: number
    ) {
      this._name = name;
      this._gender = gender;
      this._dateOfBirth = dateOfBirth;
      this._email = email;
      this._phone = phone;
    }
  
    set name(name: string) {
      this._name = name;
    }
    get name() {
      return this._name;
    }
    set gender(gender: Gender) {
      this._gender = gender;
    }
    get gender() {
      return this._gender;
    }
    set dateOfBirth(dateOfBirth: string) {
      this._dateOfBirth = dateOfBirth;
    }
    get dateOfBirth() {
      return this._dateOfBirth;
    }
    set email(email: string) {
      this._email = email;
    }
    get email() {
      return this._email;
    }
    set phone(phone: number) {
      this._phone = phone;
    }
    get phone() {
      return this._phone;
    }  
    
}
  