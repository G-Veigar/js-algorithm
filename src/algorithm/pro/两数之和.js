// 两数之和
// 给定一个整数数组 nums 和一个整数目标值 target
// 请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 解法1：双指针
// 思路：如果有解，必定是一个左值，一个右值
// 循环数组，假定每一个值为左值， 则可以计算出需要匹配的右值是多少
// 因为右值一定在左值的右边，所有可以从数组尾部循环，循环到左值位置
// 如果能找到符合的右值，也就是找到了解，则当前左右两个指针即为结果
var twoSum = function(nums, target) {
    let left = 0
    let right = 0
    let leftVal, rightVal
    for(let i =0; i< nums.length; i++) {
        left = i
        leftVal = nums[i]
        rightVal = target - leftVal
        for(let j=nums.length; j > i; j--) {
            right = j
            if(rightVal === nums[j]) {
                return [left, right]
            }
        }
    }
}

// 解法2 
// 相当于是两个人相亲一样。字典表Map就是媒介所
// 对每个想要媳妇或者老公的人的信息进行记录
// 然后来了一个同样想找对象的人就去媒介所（字典表）中查找是否有符合目标值的老公
var twoSum2 = function(nums, target) {
    let numMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        let n2 = target - n
        if(numMap.has(n2)) {
            return [numMap.get(n2), i]
        }
        numMap.set(n, i)
    }
}