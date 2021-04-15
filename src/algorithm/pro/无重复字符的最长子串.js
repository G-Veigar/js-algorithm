// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。


// 解法1: 滑动窗口（使用数组，或者使用双指针来维护）
var lengthOfLongestSubstring = function(s) {
    let arr = []
    let max = 0
    for (let i = 0; i < s.length; i++) {
        let currentLetter = s[i]
        let lastIndex = arr.indexOf(currentLetter)
        // 存在重复
        if (lastIndex >= 0) {
            arr.splice(0, lastIndex + 1)
        }
        arr.push(currentLetter)
        max = Math.max(arr.length, max)
    }
    return max
}

let res = lengthOfLongestSubstring('pwwkew')

console.log(res)