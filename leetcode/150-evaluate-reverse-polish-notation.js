/**
 * 题意：逆波兰表达式求值。给定一个数组，表示一个逆波兰表达式。求其值
 * 思路：从左到右遍历表达式的每个数字和字符，遇到数字就进栈
        遇到符号，就将栈顶的两个数字取出（注意第一次取出的是右操作数，第二次取出的栈顶数字是左操作数），
        进行运算，将运算结果压栈，一直到最终获得计算结果（最终的栈顶数字）
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = []
  let str = '+-*/'
  tokens && tokens.forEach(v => {
    if (str.includes(v)) {
      let right = stack.pop()
      let left = stack.pop()
      let res
      switch(v){
        case '+':
          res = left + right
          break
        case '-':
          res = left - right
          break
        case '*':
          res = left * right
          break
        case '/':
          res = ~~(left / right)
          break
        default:
          break
      }
      stack.push(res)
    }else{
      stack.push(Number(v))
    }
  })

  return Number(stack.pop())
};
