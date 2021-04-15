// https://leetcode-cn.com/problems/longest-palindromic-substring/
var longestPalindrome = function(s) {
    let len = s.length
    let res = ''
    //创建二维数组
    let dp = Array.from(new Array(len),()=>(new Array(len).fill(0)))
    for (let i = 0; i < length; i++) {
        for(let j = i; j>=0; j--) {
            if(s[i]==s[j]) {
                if(i - j < 2) {
                    dp[j][i] = true
                } else {
                    dp[j][i] = dp[j+1][i-1]
                }
            } else {
                dp[j][i] = false
            }
            if (dp[j][i] && (i - j + 1 > res.length)) {
                res =  s.substring(j, i+1)
            }
        }
    }
    return res
}