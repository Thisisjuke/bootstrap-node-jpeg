class User {
    createUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.uid = this.createUUID();
    }

    get uid() {
        return this._uid;
    }
    set uid(uid) {
        this._uid = uid;
    }
    set firstName(firstName) {
        this._firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    }
    get firstName() {
        return this._firstName;
    }
    set lastName(lastName) {
        this._lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    }
    get lastName() {
        return this._lastName;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }

    isValid(){
        this._age > 13 && this._firstName && this._lastName && this.email.match(/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/);
    }
}

module.exports = User;