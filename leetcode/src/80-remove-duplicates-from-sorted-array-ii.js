/**
 * 给定数组去重，原数组最多保留两个，返回去重后的长度
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // 记录同值元素的次数
  var count = 0

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      if (count === 1) {
        nums.splice(i, 1)
        i -= 1
      }else{
        count += 1
      }
    }else{
      count = 0
    }
  }

  return nums.length
};

// the other more fast
var removeDuplicates = function(nums) {
    // [0, j]为目标值
    var j = 0;
    
    for (var i = 0; i < nums.length; i++) {
        if (j < 2 || nums[i] > nums[j-2]) {
            nums[j++] = nums[i];
        } 
    }
    return j;
}