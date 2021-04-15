// 下划线转驼峰
// aa_bb_cc => aaBbCc
// 方法1
function format(str) {
    let subArr = str.split('_')
    subArr = subArr.map((item, index) => {
        if(index > 0) {
            let letter = item[0].toUpperCase()
            return letter + item.substr(1)
        }
        return item
    })
    return subArr.join('')
}

// TODO： 方法2 - 正则

let res = format('aa_bb_cc')

console.log(res)