function mySetInterval(fun, time, ...args) {
    fun = fun.bind(this, ...args)
    let timer
    let clear = () => {
        clearTimeout(timer)
    }
    let timeout = () => {
        timer = setTimeout(() => {
            fun()
            timeout()
        }, time)
    }
    timeout()
    return clear
}

let i = 1
let clear = mySetInterval(() => {
    console.log('tik', i++)
    if(i == 6) {
        clear()
    }
}, 1000)