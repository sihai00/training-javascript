/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length === 0) return []
  if (nums.length === 3) return nums[0] + nums[1] + nums[2]

  nums.sort((a, b) => a - b)
  var result = 0
  var diff = 0

  for (var i = 0; i < nums.length - 2; i++) {
    var start = i + 1
    var end = nums.length - 1
    var sum = nums[i] + nums[start] + nums[end]

    while(start + 1 < end){
      if (sum === target) {
        return target
      }else if(sum < target){
        start += 1
      }else{
        end -= 1
      }
      sum = nums[i] + nums[start] + nums[end]
    }

    if (diff === 0){
      result = sum
      diff = Math.abs(target - sum)
    }else{
      if (Math.abs(target - sum) <= diff) {
        result = sum
        diff = Math.abs(target - sum)
      }
    }
  }

  return result
};