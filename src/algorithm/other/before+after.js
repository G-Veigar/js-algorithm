function before(beforeFun) {
    let fun = this
    return function(...args) {
        beforeFun.apply(this, args)
        return fun.apply(this, args)
    }
}

function after(afterFun) {
    let fun = this
    return function(...args) {
        let res = fun.apply(this, args)
        beforeFun.apply(this, args)
        return
    }
}

Function.prototype.before = before

function say(str) {
    console.log(str)
}

let fun = say.before(str => {
    console.log('param is', str)
})

fun('222')
