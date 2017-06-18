/*
* 目标：字符串查询补充
* 解释：从传递进来的字母序列中找到缺失的字母并返回它,如果所有字母都在序列中，返回 undefined
* 例如：fearNotLetter("abce") 应该返回 "d"
* 思路：只需找到参数的第一个字母下标，和标准的一一对比，如果不相等则返回标准字母，否则就是undefined了
* */

function fearNotLetter(str) {
  if (typeof str !== 'string') return 
  var letter = 'abcdefghijklmnopqrstuvwxyz'
  var index = letter.indexOf(str.charAt(0))
  var result = undefined
  
  str.toLowerCase().split('').some((v, i) => {
    var compared = letter.charAt(index + i)

    if (v !== compared) {
      result = compared
      return true
    }else{
      return false
    }
  })

  return result
}

fearNotLetter("abce");