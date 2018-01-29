/**
 * 给整型数组nums、整数k、整数t，是否存在索引i和j，使得nums[i]与nums[j]之间不超过t，且i和j之间的不超过k
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */

// time out
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  var set = new Set()

  for (var i = 0; i < nums.length; i++) {
    var min = [...set].sort((a, b) => a - b).filter(v => v >= nums[i] - t)[0]
    if (min != null && min <= nums[i] + t) return true

    set.add(nums[i])
    if (set.size === k + 1) {
      set.delete(nums[i - k])
    }
  }

  return false
};

var containsNearbyAlmostDuplicate = function(nums, k, t) {
  var len = nums.length;
  for (var i = 0; i < len; i++)
    for (var j = i + 1; j <= Math.min(i + k, len - 1); j++)
      if (Math.abs(nums[i] - nums[j]) <= t) return true;
  return false;
};