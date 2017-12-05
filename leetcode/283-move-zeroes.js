/**
 * 给定数组，把非0元素移到最前面并且保持原来的顺序
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // [0, k)内为目标值
  var k = 0
  // 交换元素的中间值
  var tem = 0

  for(var i = 0; i < nums.length; i++){
    if (nums[i]) {
      if (i !== k) {
        tem = nums[k]
        nums[k] = nums[i]
        nums[i] = tem
      }

      k += 1
    }
  }
};