/* 手写instanceof
 * @Author: gaoge 
 * @Date: 2020-04-12 13:29:04 
 * @Last Modified by:   gaoge 
 * @Last Modified time: 2020-04-12 13:29:04 
 */

function myInstanceof(ins, fun) {
    let proto = Object.getPrototypeOf(ins)
    while(proto) {
        if(proto === fun.prototype) {
            return true
        } else {
            proto = Object.getPrototypeOf(proto)
        }
    }
    return false
}

let a = {}
console.log(myInstanceof(a, Object))
let b = []
console.log(myInstanceof(b, Object))
console.log(myInstanceof(b, Array))