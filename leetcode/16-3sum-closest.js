/**
 * 题目：给定一组数组和目标值，计算数组中三个数的和使得最接近target值
 * 思路：跟15思路异曲同工
      1.排序
      2.假定一个值，然后循环从两端取值相加，依次和target比较，如果比target大，那么left+1，如果小right-1，相等则返回
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length === 0) return []

  nums.sort((a, b) => a - b)
  var result = (nums[0] + nums[1] + nums[2])

  for (var i = 0; i < nums.length - 2; i++) {
    var start = i + 1
    var end = nums.length - 1

    while(start < end){
      sum = nums[i] + nums[start] + nums[end]

      if (sum === target) {
        return target
      }else if(sum < target){
        start += 1
      }else{
        end -= 1
      }

      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum
      }
    }
  }

  return result
};