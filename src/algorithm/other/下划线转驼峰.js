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
function format2(str) {
    return str.replace(/\_(\w)/g, function(all, letter){
        return letter.toUpperCase()
    })
}

// 驼峰转换下划线
function toLine(name) {
    return name.replace(/([A-Z])/g, "_$1").toLowerCase()
}

let res = format2('aa_bb_cc')

console.log(res)