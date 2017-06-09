/*
* 目标：阶乘
* 例如：5! = 1 * 2 * 3 * 4 * 5 = 120
* 
* */
function factorialize(num){
  // 限制输入类型
  var result = typeof num === 'number' && num
  // 限制递归到底的条件
  if(result <= 1) return 1
  // 递归
  return result*factorialize(num - 1)
}

factorialize(5)