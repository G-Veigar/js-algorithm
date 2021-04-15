function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.intro = function() {
    console.log('name: ' + this.name + ', age: ' + this.age)
}

function Coder(name, age, type) {
    Person.call(this, name, age)
    this.type = type
}

Coder.prototype = Object.create(Person.prototype, {
    constructor: {
        value: Coder,
        writable: true,
        enumerable: false,
        configurable: true
    }
})

Coder.prototype.sayJob = function() {
    console.log('i am a ' + this.type)
}

let me = new Coder('gaoge', 28, '前端工程师')

me.intro()
me.sayJob()

console.log(me instanceof Person)




