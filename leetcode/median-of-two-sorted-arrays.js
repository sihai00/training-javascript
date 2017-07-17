/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var sum = [...nums1, ...nums2].sort((a, b) => a - b)
  var len = sum.length

  if (len & 1) {
    return sum[Math.floor(len / 2)]
  }else{
    var midIndex = Math.floor(len / 2)
    return (sum[midIndex - 1] + sum[midIndex]) / 2
  }
};