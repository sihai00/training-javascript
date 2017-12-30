/**
 * 给整型数组nums和整数k，是否存在索引i和j，使得nums[i]===nums[j]且i和j之间的差不超过1
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var set = new Set()

  for (var i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true

    set.add(nums[i])
    // 保持set中最多有k个元素
    if (set.size === k + 1) {
      set.delete(nums[i - k])
    }
  }

  return false
};
