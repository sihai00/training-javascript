var common = require('../common')

/**
 * 堆：可用数组模拟，从下标为1开始，0不使用
 * 规则：
    1.任何一个节点都不大于它的父亲节点
    2.i节点的父节点计算：Math.floor(i / 2)。左孩子节点：2 * i。右孩子节点：2 * i + 1
 */

/**
 * 生成堆
 * 时间复杂度O(nlogn)
 */
// exports.heapify = function(arr){
//   var res = []
//   // 遍历数组，依次把元素插入
//   for (var i = 0; i < arr.length; i++) {
//     res[i + 1] = arr[i]
//     // 校验是否满足堆的性质
//     shiftUp(i + 1)
//   }

//   function shiftUp(i){
//     // 如果当前元素比它的父(i / 2)大，那么不满足堆的性质，交换位置
//     while(i > 1 && res[i] > res[Math.floor(i / 2)]){
//       res = common.swap(res, i, Math.floor(i / 2))
//       i = Math.floor(i / 2)
//     }
//   }

//   return res
// }

/**
 * 优化生成堆：
 * 从第一个非叶子节点（len / 2）开始采用shiftDown，那么以该节点为根的子树都符合堆的定义
 * 时间复杂度O(n)
 */
exports.heapify = function(arr){
  var res = []
  // 格式化数组，从下标为1开始
  arr.forEach((v, i) => {
    res[i + 1] = v
  })
  var len = res.length
  // 从第一个非叶子节点（len / 2）开始采用shiftDown
  for (var i = Math.floor(len / 2); i > 0; i--) {
    shiftDown(i)
    console.log(res, i)
  }

  function shiftDown(i){
    // 判断是否存在左子节点
    while(res[i * 2]){
      var j = i * 2
      // 判断左子节点是否比右子节点大
      if (res[j] < res[j + 1]) j += 1
      // 判断当前节点是否比子节点大
      if (res[i] > res[j]) break
      // 如果当前节点比子节点小，则交换位置。当前的子节点是堆，继续向下维护堆的定义
      res = common.swap(res, i, j)
      i = j
    }
  }

  return res
}

/**
 * 堆排序（堆的定义中，头部的优先级最高，就是最大值）
 * 1.堆头尾交换位置，尾部为最大值推出
 * 2.从头部(i)开始判断，如果当前节点比左右节点大，满足堆定义。
 * 3.如果比左右节点小，则和子节点中最大值节点交换位置，当前子节点满足堆定义，则继续向下直到都满足
 */
exports.heapifySort = function(arr){
  var res = arr
  var newArr = []
  var len = res.length

  // 循环获取当前堆中的最大值
  for (var i = 1; i < len; i++) {
    // 把堆头尾换位，把最大值存入新数组
    res = common.swap(res, 1, res.length - 1)
    newArr.push(res.pop())

    // 按堆的规则维护堆
    shiftDown(1)
  }

  function shiftDown(i){
    // 判断是否存在左子节点
    while(res[i * 2]){
      var j = i * 2
      // 判断左子节点是否比右子节点大
      if (res[j] < res[j + 1]) j += 1
      // 判断当前节点是否比子节点大
      if (res[i] > res[j]) break
      // 如果当前节点比子节点小，则交换位置。当前的子节点是堆，继续向下维护堆的定义
      res = common.swap(res, i, j)
      i *= 2
    }
  }

  return newArr
}