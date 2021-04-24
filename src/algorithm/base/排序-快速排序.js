function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let midIndex = Math.floor(arr.length / 2)
    let midVal = arr[midIndex]
    let midArr = [midVal]
    let leftArr = []
    let rightArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i === midIndex) {
            continue
        }
        if(arr[i] <= midVal) {
            leftArr.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(leftArr), ...midArr, ...quickSort(rightArr)]
}

console.log(quickSort([2,1,4,8,5,4,4]))