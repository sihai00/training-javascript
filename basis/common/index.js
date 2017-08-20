/**
 * 交换数组位置
 * @param {number[]} arr 目标数组
 * @param {number} a 交换下标
 * @param {number} b 交换下标
 * @return {number[]}
 */
exports.swap = function(arr, a, b){
  var res = arr
  var sign = res[a]

  res[a] = res[b]
  res[b] = sign

  return res
}

/**
 * 生成随机数
 * @param {number[]} nums 数量
 * @param {number} min 范围最小值
 * @param {number} max 范围最大值
 * @return {number[]}
 */
exports.randomNumber = function(num, min, max){
  if (min > max) return

  var res = []

  for (var i = 0; i < num; i++) {
    res.push(Math.floor(Math.random() * (max - min + 1) + min))
  }

  return res
}

/**
 * 检测函数执行时间
 * @param {string} name 函数名
 * @param {function} cb 需执行回调函数
 * @param {number[]} params 回调函数的参数
 * @return {number[]}
 */
exports.runFunTime = function(name, cb, params){
  console.time(name)
  var res = cb.apply(null, params)
  console.timeEnd(name)

  return res
}

/**
 * 判断排序是否成功(默认顺序-小到大)
 * @param {number[]} arr 函数名
 * @param {boolean} bol 是否打印出排序数组
 * @return {boolean}
 */
exports.isSort = function(arr, bol){
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      console.log('check: no')
      return false
    }
  }
  console.log('check: yes', bol ? arr : '')
  return true
}
