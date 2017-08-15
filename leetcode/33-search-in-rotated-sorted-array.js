/**
 * 题意：假设有一个排序的按未知的旋转轴旋转的数组(比如，0 1 2 4 5 6 7 可能成为4 5 6 7 0 1 2)。给定一个目标值进行搜索，如果在数组中找到目标值返回数组中的索引位置，否则返回-1
 * 思路：
      1.一次循环，依次比较
      2.一次循环，两端同时比较
      3.一次循环，同时维护两端和中间值，找到目标值所在的区间足部缩小范围
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
  return nums.length > 0 ? nums.indexOf(target) : -1
};

// 两路
var search = function(nums, target) {
  if (nums.length <= 0) return -1

  var len = nums.length
  var s = 0
  var e = len - 1
  for (var i = 0; i < len && s <= e; i++) {
    if (nums[s] !== target && nums[e] !== target) {
      s += 1
      e -= 1
    }else{
      if (nums[s] === target) {
        return s
      }else{
        return e
      }
    }
  }

  return -1
};

// more fast by other people
var search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[low] <= nums[mid]) {
      if (target >= nums[low] && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return nums[low] === target ? low : -1;
};
