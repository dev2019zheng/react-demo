class Animal {
    public name: string
    private age: number

    constructor(name: string, age: number) {
        this.age = age
        this.name = name
    }

}

class Cat extends Animal{
    public sayHi(): void {
        console.log('hello')
    }

}

let cat = new Cat('喵~', 2);

console.log(cat)

cat.sayHi()

export default Cat
