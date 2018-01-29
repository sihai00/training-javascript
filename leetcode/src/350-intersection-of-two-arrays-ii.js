/**
 * 求两个数组的交集，可重复
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var map = {}, res = []

  for (var i = 0; i < nums1.length; i++) {
    map[nums1[i]] = (map[nums1[i]] || 0) + 1
  }

  for (var i = 0; i < nums2.length; i++) {
    if (map[nums2[i]] > 0) {
      res.push(nums2[i])
      map[nums2[i]] --
    }
  }

  return res
};