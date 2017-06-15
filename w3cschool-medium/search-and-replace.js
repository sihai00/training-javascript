/*
* 目标：查询替换
* 解释：参数1:查找和替换的句子; 参数2:将被替换掉的单词; 参数3: 用于替换第二个参数
* 例如：myReplace("His name is Tom", "Tom", "john") 应该返回 "His name is John"
* 
* */

function myReplace(str, before, after) {
  if (typeof str !== 'string' && typeof before !== 'string' && typeof after !== 'string') return

  var result = ''

  result = str.split(' ').map(v => {
    if (v.toLowerCase() === before.toLowerCase()) {
      // 判断第一个字母是否大写
      return v.charAt(0) === v.charAt(0).toUpperCase() ? after.charAt(0).toUpperCase() + after.substring(1).toLowerCase() : after.toLowerCase()
    }else{
      return v
    }
  }).join(' ')

  return result;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");