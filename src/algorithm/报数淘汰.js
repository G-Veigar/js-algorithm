// n个人围成一圈，从第一个人开始，从1开始报数
// 当报到m的时候，这个人被淘汰出局，下一个人从1重新开始报数
// 依次类推，问最后获胜的是哪个人，写一个算法

function getWinner(n, m) {
    let arr = Array(n)
    for(let i = 0; i < n; i++) {
        arr[i] = i + 1
    }
    while(arr.length > 1) {
        for(let count = 1; count < m; count++) {
            let safeNum = arr.shift()
            arr.push(safeNum)
        }
        arr.shift()
    }
    return arr[0]
}

console.log(getWinner(5, 3))