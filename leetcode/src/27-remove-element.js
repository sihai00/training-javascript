/**
 * 给定数组和目标值，删除数组中存在的目标值，返回数组长度
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (nums.length === 0) return 0

  var left = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[left++] = nums[i]
    }
  }
  return left
};

// more fast by other people
var removeElement = function(nums, val) {
  for (var i = 0; i < nums.length; ++i){
    if (nums[i] == val){
      nums.splice(i, 1);
      --i;
    }
  }
  return nums.length;
};