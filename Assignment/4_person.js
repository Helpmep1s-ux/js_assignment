class Person{
    constructor(nam,ag){
        this.name = nam;
        this.age = ag;
    }
    introduce() {
        console.log('My name is',this.name,'and I am',this.age,'years old.')
    }
}
const p1 = new Person("Anuj",20);
p1.introduce();