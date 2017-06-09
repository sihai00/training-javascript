/*
* 目标：回文
* 解释：如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)
* 例如：输入：racecar 返回：true
* 
* */
function palindrome(str){
  // 正则排除标点符号、大小写和空格，再转为小写
  var result = str.toString().replace(/[\W_]*/gi,'').toLowerCase()
  
  // 利用数组反转函数
  return result === result.split('').reverse().join('') ? true : false
}

palindrome('A man, a plan, a canal. Panama')
palindrome('0_0 (: /-\ :) 0-0')