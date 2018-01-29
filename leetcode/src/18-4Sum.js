/**
 * 给定数组，使得四个子元素相加等于target
 * 思路和15差不多
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort(function (a, b) {
    return a > b ? 1 : -1;
  });
  var N = nums.length;
  var results = [];
  for (var i = 0; i < N - 3; i++) {
    if(nums[i] == nums[i - 1]) {
      continue;
    }
    for (var j = i + 1; j < N - 2; j++) {
      if(j != (i + 1) && nums[j] == nums[j - 1]) {
        continue;
      }
      var d = target - nums[i] - nums[j];
      var l = j + 1;
      var r = N - 1;
      while(l < r) {
        if(nums[l] + nums[r] < d) {
          l++;
        }
        else if(nums[l] + nums[r] > d) {
          r--;
        }
        else {
          var result = [];
          result.push(nums[i]);
          result.push(nums[j]);
          result.push(nums[l]);
          result.push(nums[r]);
          results.push(result);
          while(nums[l] == nums[l + 1] && l < r) {
            l++;
          }
          while(nums[r] == nums[r - 1] && l < r) {
            r--;
          }
          l++;
          r--;
        }
      }
    };
  };
  return results;
};