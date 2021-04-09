// 将数组全部打平
function flat(arr) {
    let res = []
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            res = [...res, ...flat(arr[i])]
        } else {
            res.push(arr[i])
        }
    }
    return res
}

// 传入参数控制打平的层级
let flat2 = (arr, flatLevel) => {
    let flatLevelIndex = 0
    function _r(arr, flatLevel) {
        flatLevelIndex += 1
        let res = []
        for(let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i]) && flatLevel >= flatLevelIndex) {
                res = [...res, ..._r(arr[i], flatLevel)]
            } else {
                res.push(arr[i])
            }
        }
        flatLevelIndex -= 1
        return res
    }
    return _r(arr, flatLevel)
}

let arr = [1,2, [3, [4, 5]]]

let res = flat2(arr, 2)

console.log(res)

