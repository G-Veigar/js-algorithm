// 二分查找
function findIndex(arr, num) {
    let start = 0
    let end = arr.length - 1
    let index
    while (start <= end) {
        index = Math.floor((end + start) / 2)
        if (arr[index] > num) {
            end = index - 1
        } else if(arr[index] < num) {
            start = index + 1
        } else {
            return index
        }
    }
}

console.log(findIndex([1,2,3,4,5,6,7,8,9,10], 4))