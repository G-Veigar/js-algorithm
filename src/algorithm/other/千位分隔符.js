// 千位分隔符
function format(num) {
    let numArr = String(num).split('.')
    let intPart = numArr[0]
    let decPart = numArr[1]
    let intArr = []
    let currentStr = ''
    let divideNum = 3
    let divideIndex = 0
    for (let i = intPart.length -1; i >= 0; i--) {
        divideIndex++
        currentStr = intPart[i] + currentStr
        if(divideIndex === divideNum) {
            console.log(currentStr)
            intArr.unshift(currentStr)
            divideIndex = 0
            currentStr = ''
        }
    }
    if (currentStr.length > 0) {
        intArr.unshift(currentStr)
    }
    return intArr.join(',') + '.' + decPart
}

let res = format(12345678.234)

console.log(res)