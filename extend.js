"use strict";

class Person {
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    foo() {
        return `name:${this._name} age:${this._age}`;
    }
}

class Chef extends Person {
    constructor(name, age) {
        super(name, age);
    }

}

let manzi = new Chef("chef", 22);
console.log(manzi.foo());