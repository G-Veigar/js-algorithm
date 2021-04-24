/* 
 * 手写 new
 * @Author: gaoge 
 * @Date: 2020-04-12 13:29:28 
 * @Last Modified by: gaoge
 * @Last Modified time: 2020-04-12 14:02:14
 */

// 方法1
function myNew(fun, ...params) {
    let obj = Object.create(fun.prototype)
    let res = fun.apply(obj, params)
    return  res instanceof Object ? res : obj
}

// 方法2：
function myNew2(fun, ...params) {
    let obj = {}
    Object.setPrototypeOf(obj, fun.prototype)
    let res = fun.apply(obj, params)
    return  res instanceof Object ? res : obj
}
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.intro = function() {
    console.log(this.name, this.age)
}

let xiaoming = myNew2(Person, 'xiaoming', 28)

xiaoming.intro()
console.log(xiaoming instanceof Person)


