// 柯里化函数
// function fun(a,b,c,d){}
// let curryFun = curry(fun)
//  fun(a,b,c,d) === curryFun(a)(b)(c)(d)

function curry(fn, ...args) {
    let length = fn.length
    let allArgs = [...args]
    function _c (...moreArgs) {
        allArgs = [...allArgs, ...moreArgs]
        if (allArgs.length < length) {
            return _c
        }
        return fn(...allArgs)
    }
    return _c()
}

// let fun = (name, age, job) => {
//     return `${name} ${age} ${job}`
// }

// let curryFun = curry(fun, '小明')

// let res = curryFun(18)('前端')

// console.log('res', res)