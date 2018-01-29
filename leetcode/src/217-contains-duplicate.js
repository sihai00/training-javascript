/**
 * 若数组中存在相同元素，则返回true，否则返回false
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var set = new Set()

  for (var i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true

    set.add(nums[i])
  }

  return false
};