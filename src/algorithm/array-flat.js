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
let flat2 = (function(){
    let flatLevelIndex = 0
    return function(arr, flatLevel) {
        flatLevelIndex += 1
        let res = []
        for(let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])) {
                console.log(flatLevel, flatLevelIndex)
            }
            if(Array.isArray(arr[i]) && flatLevel >= flatLevelIndex) {
                res = [...res, ...flat2(arr[i], flatLevel)]
            } else {
                res.push(arr[i])
            }
        }
        flatLevelIndex -= 1
        return res
    }
})()

