/*
* 目标：质数求和(求小于等于给定数值的质数之和)
* 解释：只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除
* 例如：[1, 2, 3, 5], [1, 2, 3, 4, 5] 应该返回 [4]
* 
* */

function sumPrimes(num) {
  if (typeof num !== 'number') return
  
  return Array(num).join(',').split(',').map((v, i) => i).filter(v => {
    if(v === 2 || v === 3 || v === 5 || v === 7){
      return true
    }else if(v === 1){
      return false
    }else{
      return v % v === 0 && v % 2 !== 0 && v % 3 !== 0 && v % 5 !== 0 && v % 7 !== 0
    }
  }).reduce((pre, next) => pre + next)
}

sumPrimes(10);