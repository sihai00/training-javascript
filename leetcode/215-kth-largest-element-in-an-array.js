/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 三路快排思路
var findKthLargest = function(nums, k) {
  if (nums.length <= 0) return 
  let arr = nums
  let len = arr.length
  
  while(len > 0){
    if (len === 1) return arr[0]

    let first = arr[0]
    let max = []
    let min = []
    let mid = []

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === first) {
        mid.push(arr[i])
      }else if(arr[i] > first){
        max.push(arr[i])
      }else if(arr[i] < first){
        min.push(arr[i])
      }
    }

    if (k <= max.length) {
      arr = max
    }else{
      if (k > mid.length + max.length) {
        arr = min
        k -= (max.length + mid.length)
      }else{
        return mid[0]
      }
    }

    len = arr.length
  }
};

var findKthLargest = function(nums, k) {
  var sorted = nums.sort(function(a, b){ return b - a});
  return nums[k - 1];
}