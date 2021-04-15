class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    intro() {
        console.log(this.name, this.age)
    }
}

class Coder extends Person {
    constructor(name, age, type) {
        super(name, age)
        this.type = type
    }

    sayJob() {
        console.log(this.type)
    }
}

let me = new Coder('gaoge', 28, '前端工程师')

me.intro()
me.sayJob()

console.log(me instanceof Person)



