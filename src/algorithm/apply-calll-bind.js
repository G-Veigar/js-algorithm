Function.prototype.myCall = function(thisObj, ...argArr) {
    let thisFun = this // 获取调用call的这个函数
    !thisObj && (thisObj = window)
    thisObj.fun = thisFun
    let res = thisObj.fun(...argArr)
    delete thisObj.fun
    return res
}

Function.prototype.myApply = function(thisObj, argArr) {
    let thisFun = this // 获取调用call的这个函数
    !thisObj && (thisObj = window)
    thisObj.fun = thisFun
    let res = thisObj.fun(...argArr)
    delete thisObj.fun
    return res
}

Function.prototype.myBind = function(thisObj, ...argArr) {
    let thisFun = this // 获取调用call的这个函数
    !thisObj && (thisObj = window)
    return function() {
        thisObj.fun = thisFun
        let res = thisObj.fun(...argArr)
        delete thisObj.fun
        return res
    }
}

window.name = 'win'

let a = {
    name: 'aaa'
}

function sayName (age, add) {
    console.log(this.name, age, add)
}


sayName.call(a, 20, 'call')
sayName.myCall(a, 20, 'call')
sayName.apply(a, [20, 'apply'])
sayName.myApply(a, [20, 'apply'])
sayName.bind(a, 20, 'bind')()
sayName.myBind(a, 20, 'bind')()