// 数组去重
function distinct(Arr) {
    return [...new Set(Arr)]
}

function distinct2(Arr) {
    let map = {}
    let res = []
    for(let val of Arr) {
        if(!map[val]) {
            res.push(val)
            map[val] = true
        }
    }
    return res
}

let arr = [1, 2, 2, 3, 4, 4, 4, 5]

let res = distinct2(arr)

console.log(res)