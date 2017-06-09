/*
* 目标：翻转字符串
* 例如：hello => olleh
* 
* */
function reverseString(str){
  var result = str.toString()
  
  return result.split('').reverse().join('')
}

reverseString('hello')