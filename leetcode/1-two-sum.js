/**
 * 给出一个整型数组nums，返回这个数组中两个数字的索引值i和j，
 * 使得nums[i] + nums[j]等于一个给定的target
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // 查找表
var twoSum3 = function(nums, target) {
  var len = nums.length
  var obj = {}

  for(var i = 0; i < len; i++){
    var result = target - nums[i]
    // 注意当值为0时会返回false
    if (obj[result] !== undefined) {
      return [obj[result], i]
    }else{
      obj[nums[i]] = i
    }
  }
}

var twoSum = function(nums, target) {
  var len = nums.length
  for(var i = 0; i < len; i++){
    for(j = i + 1; j < len; j++){
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

var twoSum2 = function(nums, target) {
  var len = nums.length
  var obj = {}

  nums.forEach((v, i) => {
    obj[v] = i
  })

  for(var i = 0; i < len; i++){
    var result = target - nums[i]
    if (obj[result]) {
      return [i, obj[result]]
    }
  }
}
