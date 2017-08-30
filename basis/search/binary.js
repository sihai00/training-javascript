/**
 * 迭代实现二分查找
 * @params[array] arr 有序数组
 * @params[num] target 目标数
 * @return[num] 目标数下标
 */
exports.binary1 = function(arr, target){
  var l = 0
  var r = arr.length - 1

  while(l <= r){
    var mid = l + Math.floor((r - l) / 2)

    if (arr[mid] === target) {
      return mid
    }
    if (arr[mid] > target) {
      r = mid - 1
    }else{
      l = mid + 1
    }
  }

  return -1
}

/**
 * 递归实现二分查找
 * @params[array] arr 有序数组
 * @params[num] target 目标数
 * @return[num] 目标数下标
 */
exports.binary2 = function(arr, target){
  var l = 0
  var r = arr.length - 1

  return __binary(arr, target, l, r)
}

function __binary(arr, target, l, r){
  if (l > r) return -1

  var mid = l + Math.floor((r - l) / 2)
  if (arr[mid] === target) {
    return mid
  }

  if (arr[mid] > target) {
    r = mid - 1
  }else{
    l = mid + 1
  }

  return __binary(arr, target, l, r)
}

/**
 * floor 返回离目标数最近的小值
 * @params[array] arr 有序数组
 * @params[num] target 目标数
 * @return[num] 目标数下标
 */
exports.floor = function(arr, target){
  var l = 0
  var r = arr.length - 1

  while(l + 1 < r){
    var mid = l + Math.floor((r - l) / 2)

    if (arr[mid] === target) {
      return mid
    }
    if (arr[mid] > target) {
      r = mid
    }else{
      l = mid
    }
  }
  return l
}

/**
 * ceil 返回离目标数最近的大值
 * @params[array] arr 有序数组
 * @params[num] target 目标数
 * @return[num] 目标数下标
 */
exports.ceil = function(arr, target){
  var l = 0
  var r = arr.length - 1

  while(l + 1< r){
    var mid = l + Math.floor((r - l) / 2)

    if (arr[mid] === target) {
      return mid
    }
    if (arr[mid] > target) {
      r = mid
    }else{
      l = mid
    }
  }

  return r
}