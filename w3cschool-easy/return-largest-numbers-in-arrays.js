/*
* 目标：寻找数组中的最大值
* 解释：分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组
* 
* */
function largestOfFour(arr){
  // 判断是否为数组
  var result = Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && arr
  var newarr = []
  
  // 妙用Math.max函数
  result.forEach(v => {
    newarr.push(Math.max.apply('', v))
  })

  return newarr
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])