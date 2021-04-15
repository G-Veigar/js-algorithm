// Promise.all
function promiseAll(arr) {
    let length = arr.length
    let res = new Array(length)
    let resolvedNum = 0
    return new Promise((resolve, reject) => {
        arr.forEach((val, index) => {
            Promise.resolve(val).then(value => {
                res[index] = value
                resolvedNum++
                if(resolvedNum === length) {
                    resolve(res)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    })
}

// Promise.race
function promiseRace(arr) {
    let length = arr.length
    let errorArr = new Array(length)
    let rejectedNum = 0
    return new Promise((resolve, reject) => {
        arr.forEach((val, index) => {
            Promise.resolve(val).then(value => {
                resolve(value)
            }).catch((err) => {
                rejectedNum ++
                errorArr[errorArr] = err
                if(rejectedNum === length) {
                    reject(errorArr)
                }
            })
        })
    })
}

// Promise.any
function promiseRace(arr) {
    return new Promise((resolve, reject) => {
        arr.forEach((val, index) => {
            Promise.resolve(val).then(value => {
                resolve(value)
            }).catch((err) => {
                reject(err)
            })
        })
    })
}

function promiseMaker(time, resolved) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (resolved) {
                resolve('resolved' + time)
            } else {
                reject(new Error('reject'))
            }
        }, time)
    })
}

let arr = [
    promiseMaker(1000, true),
    promiseMaker(3000, true),
    promiseMaker(5000, false),
    3
]

Promise.race(arr).then(res => {
    console.log('res: ', res)
}).catch(e => {
    console.log('errpr: ', e)
})