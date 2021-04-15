function debounce(fun, time) {
    let timer
    return function(...args) {
        if (timer) {
            clearTimeout(timer)
        }
        setTimeout(() => {
            fun.apply(this, args)
            timer = 0
        }, time)
    }
}

function throttle(fun, time) {
    let lastTime = 0
    return function(...args) {
        let now = Date.now()
        if (now - lastTime > time) {
            lastTime = now
            fun.apply(this, args)
        }
    }
}