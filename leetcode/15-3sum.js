/**
 * 题目：给出一个有n个整数的数组S，在S中找到三个整数a, b, c，找到所有使得a + b + c = 0的三元组
 * 1.在三元组(a, b, c)，要求a <= b <= c。2.结果不能包含重复的三元组
 * 解题：
 * 1.排序
 * 2.然后定好一个数的位置，查找另外两个数的和等于-nums[i]的组合，由于数组排好序了，所以可以从两边往中间走，当结果大于0的时候后边往后退一步，否则前边进一步，时间复杂度O(n^2)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort(function(a, b) {
      return a - b
  })
  var result = []
  for (var i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) { continue }
    var s = i + 1
    var e = nums.length - 1
    while (s < e) {
      if (nums[i] + nums[s] + nums[e] === 0) {  
        result.push([nums[i], nums[s], nums[e]])
        while (s < e && nums[s] === nums[s + 1]) { s++ }
        while (s < e && nums[e] === nums[e + 1]) { e-- }
        s++
        e--
      } else if (nums[i] + nums[s] + nums[e] > 0) {
        e--
      } else {
        s++
      }
    }
  }
  return result
};

var threeSum = function(nums) {
  
};
