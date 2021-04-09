// 斐波那契数列，每一项目是前两项之和
// 1 1 2 3 5 8 13 21 ...

// 解法1： 递归，递归在这个场景下性能差
function feibo(index) {
    if(index > 2) {
        return feibo(index - 1) + feibo(index - 2)
    } else {
        return 1
    }
}

// 解法2：动态规划
function feibo2(index) {
    let resArr = [1, 1]
    for (let i = 2; i < index; i++) {
        resArr.push(resArr[i-1] + resArr[i-2])
    }
    return resArr[index - 1]
}

// 解法2：动态规划优化版 不使用数组缓存
function feibo3(index) {
    let lastValue = 1
    let nextLast = 1
    let result = 1
    if(index > 2) {
        for (let i = 2; i < index; i++) {
            // 计算当前value
            result = lastValue + nextLast
            // 更新lastValue与nextLast
            nextLast = lastValue
            lastValue = result
        }
    }
    return result
}



let res = feibo3(8)

console.log(res)
