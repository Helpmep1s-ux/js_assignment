class Person{
    constructor(x,y){
        let name = x;
        let age = y;
    }
    introduce() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }
}
const p1 = new Person('Anuj',20);
p1.introduce();