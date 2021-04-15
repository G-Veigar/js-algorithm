// reduce
function myReduce(f, initialValue) {
    let arr = this
    let total = initialValue !== undefined ? initialValue : arr[0]
    let index = initialValue !== undefined ? 0 : 1
    for (; i < arr.length; i++) {
        total = f(total, arr[i], i, arr)
    }
    return total
}

// join
function myJoin(str) {
    let arr = this
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            res += `${arr[i]}`
        } else {
            res += `${str}${arr[i]}`
        }
    }
    return res
}

Array.prototype.reduce2 = myReduce
Array.prototype.join2 = myJoin

let arr = [1, 2, 3]
let res = arr.join2('-')
console.log(res)