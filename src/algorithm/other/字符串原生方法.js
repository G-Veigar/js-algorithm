function mySplit(searchStr) {
    let str = this
    let res = []
    let subStr = ''
    let temStr = ''
    let matchIndex = 0
    for (let i = 0; i < str.length; i++) {
        if(searchStr[matchIndex] === str[i]) {
            matchIndex++
            temStr += str[i]
            // 匹配完成
            if (matchIndex === searchStr.length) {
                res.push(subStr)
                subStr = ''
                matchIndex = 0
            }
        } else {
            if(matchIndex !== 0) {
                matchIndex = 0
                subStr += temStr
            } else {
                subStr += str[i]
            }
        }
    }
    if (subStr) {
        res.push(subStr)
    }
    return res
}

String.prototype.split2 = mySplit

let str = '1,,2,3'
console.log(str.split2(',,'))