var common = require('../common')

/**
 * 归并排序:（2分递归到底，规则向上合并）
 * 时间复杂度O(nlogn)
 * 2分数组，递归拆分到每个数组只剩一个元素再依次按规则合并
 */
module.exports = function(arr){
  return __mergeSort(arr)
}

function __mergeSort(arr){
  if (arr.length === 1) return arr

  var mid = Math.floor(arr.length / 2)
  var left = arr.slice(0, mid)
  var right = arr.slice(mid)

  // 优化：如果左数组的最大值比右数组的最小值小，则直接合并返回
  if (left[mid] < right[0]) {
    return left.concat([right])
  }

  return __merge(__mergeSort(left), __mergeSort(right))
}

function __merge(left, right){
  var res = []

  while(left.length > 0 && right.length > 0){
    if (left[0] < right[0]) {
      res.push(left.shift())
    }else{
      res.push(right.shift())
    }
  }

  return res.concat(left, right)
}