/*
* 目标：斐波纳契奇数求和
* 解释：给一个正整数num，返回小于或等于num的斐波纳契奇数之和
       斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和
* 例如：例如，sumFibs(4)应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3
* 
* */

function sumFibs(num) {
  if (typeof num !== 'number') return 
  var result = [1, 1]
  var max = 0
  if (num <= 2) {
    return result[num - 1]
  }
  // 获得斐波纳契数
  while(max <= num){
    var len = result.length - 1
    max = result[len] + result[len - 1]

    result.push(max)
  }
  // 筛选奇数||为1||小于num的子元素
  return result.filter(v => {
    return (v % 2 !== 0 || v === 1) && v <= num
  }).reduce((pre, next) => {
    return pre + next
  })
}

sumFibs(4);