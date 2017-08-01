/**
 * 给定排序好的数组，返回去重后的长度
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return 1

  var len = nums.length - 1
  var result = 0
  for(var i = len; i >= 0; i--){
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
    }else{
      result += 1
    }
  }

  return result
};
// 参考答案
var removeDuplicates = function(nums) {
    
  var i = 0;
  var j = 0;
  
  while(j < nums.length) {
      if (nums[i] == nums[j]) {
          j++
      } else {
          i++;
          nums[i] = nums[j];
          j++;
      }
  }
  
  return i + 1;
};