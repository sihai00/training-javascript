/**
 * 分类0、1、2（经典的三路快排）
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var zero = -1
  var two = nums.length
  var tem = 0

  for (var i = 0; i < two; ) {
    if (nums[i] === 1) {
      i += 1
    }else if(nums[i] === 2){
      two -= 1
      tem = nums[two]
      nums[two] = nums[i]
      nums[i] = tem
    }else{
      zero += 1
      tem = nums[zero]
      nums[zero] = nums[i]
      nums[i] = tem
      i += 1
    }
  }
};