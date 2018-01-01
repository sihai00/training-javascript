/**
 * 给整型数组nums、整数k、整数t，是否存在索引i和j，使得nums[i]与nums[j]之间不超过t，且i和j之间的不超过k
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  var set = new Set()
  var max = 0

  for (var i = 0; i < nums.length; i++) {
    set.forEach(v => {
      if (v <= nums[i] + t && v > max) max = v
    })
    if (max != null && max >= nums[i] - t) return true

    set.add(nums[i])
    if (set.size === k + 1) {
      set.delete(nums[i - k])
    }
  }

  return false
};