/*
* 目标：质数求和(求小于等于给定数值的质数之和)
* 解释：只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除
* 例如：[1, 2, 3, 5], [1, 2, 3, 4, 5] 应该返回 [4]
* 
* */

function sumPrimes(num) {
  if (typeof num !== 'number') return
  
  var result = [2]
  var max = 3
  // 获取小于num的质数数组
  while(max <= num){
    result.every(v => max % v !== 0) && result.push(max)
    max += 1
  }
  // 相加
  return result.reduce((pre, next) => pre + next)
}

sumPrimes(10);