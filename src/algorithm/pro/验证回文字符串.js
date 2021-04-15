// 验证回文串
// https://leetcode-cn.com/problems/valid-palindrome/


// 解法： 双指针
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let left = 0
    let right = s.length - 1
    let isLetter = /[a-zA-Z0-9]/
    while(left < right) {
        if(!isLetter.test(s[left])) {
            left += 1
            continue
        }
        if(!isLetter.test(s[right])) {
            right -= 1
            continue
        }
        if (s[left]!== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}