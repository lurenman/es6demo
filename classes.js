"use strict";

class chef {
    constructor(food) {
        this.food = food;

    }


    get disk() {
        return this._disk;
    }

    set disk(value) {
        this._disk = value;
    }

    cook() {
        console.log(this.food);
    }

    /**
     * 静态方法
     * @param soup
     */
    static make(soup) {
        console.log(soup);
    }
}

let lufei = new chef("apple");
lufei.cook();
lufei.disk = "disk";
console.log(lufei.disk);
chef.make("soup");