/**
 * 给定整型数组和数字s，寻找最少元素相加大于s的子数组
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  var l = 0, r = -1, sum = 0, res = nums.length + 1

  while(l < nums.length){
    if (r + 1 < nums.length && sum < s) {
      sum += nums[++r]
    }else{
      sum -= nums[l++]
    }

    if (sum >= s) {
      res = Math.min(res, r - l + 1)
    }
  }

  return res === nums.length + 1 ? 0 : res
};

