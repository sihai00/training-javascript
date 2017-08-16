/**
 * 题意：给定一个整型已排序数组，找到一个给定值在其中的起点与终点。 你的算法复杂度必须低于O(logn)。 如果目标在数组中不会被发现，返回[-1, -1]。 例如，给定[5, 7, 7, 8, 8, 10]，目标值为8，返回[3, 4]
 * 思路：2分查找法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length <= 1) {
    if (nums[0] === target) {
      return [0, 0]
    }else{
      return [-1, -1]
    }
  }

  var len = nums.length
  var s = 0
  var e = len - 1
  
  while(s <= e){
    if (nums[s] < target) {
      s += 1
    }
    if (nums[e] > target) {
      e -= 1
    }

    if (nums[s] === target && nums[e] === target) {
      return [s, e]
    }
  }

  return [-1, -1]
};