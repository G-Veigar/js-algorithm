// https://leetcode-cn.com/problems/valid-parentheses/
var isValid = function(s) {
    let leftStr = '([{'
    let map = new Map([
        ['{', '}'],
        ['(', ')'],
        ['[', ']']
    ])
    let leftArr = []
    for(let i = 0; i < s.length; i++) {
        // 如果是左括号
        if(leftStr.includes(s[i])) {
            leftArr.push(s[i])
        } else {
            let str = leftArr.pop()
            if(map.get(str) !== s[i]) {
                return false
            }
        }
    }
    return leftArr.length === 0
}

console.log(isValid('()[]{}'))