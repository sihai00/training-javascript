/**
 * 找到目标元素在数组中的下标，如果不存在则比较数组中的元素，返回适当的下标
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.length === 0) return 0
  var result = nums.filter(v => v <= target)
  var len = result.length
  
  if (result === 0) return 0
  return result[len - 1] === target ? len - 1 : len
};

// more fast by other people
var searchInsert = function(nums, target) {
  let pos = 0;
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] === target) {
      pos = i;
    } else if (nums[i] < target) {
      pos = i + 1;
    }
  }
  return pos;
};