/**
 * 在给定的排序好的数组中寻找两个元素，使得其他等于target，返回其下标值
 * 例如
 *    输入[2, 7, 11, 15] target 9
 *    输出[1, 2]
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  if (numbers.length < 2) return
  var l = 0, r = numbers.length - 1

  while(l < r){
    if (numbers[l] + numbers[r] === target) {
      return [l + 1, r + 1]
    }else if(numbers[l] + numbers[r] > target){
      r -= 1
    }else if(numbers[l] + numbers[r] < target){
      l += 1
    }
  }
};

// 二分查找法优化为O(nlogn)
var twoSum = function(numbers, target) {
  if (numbers.length < 2) return
  
  for (var i = 0; i < numbers.length; i++) {
    var l = i + 1, r = numbers.length - 1, other = target - numbers[i]

    while(l <= r){
      var mid = l + Math.floor((r - l)/2)
      if (numbers[mid] === other) {
        return [i + 1, mid + 1]
      }else if(numbers[mid] > other){
        r = mid - 1
      }else if(numbers[mid] < other){
        l = mid + 1
      }
    }
  }
};