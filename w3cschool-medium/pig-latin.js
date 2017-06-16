/*
* 目标：字符串移动插入
* 解释：把指定的字符串翻译成 pig latin
* 例如：translate("california") 应该返回 "aliforniacay"; 
*      translate("glove") 应该返回 "oveglay"; 
*      translate("eight") 应该返回 "eightway"
* 
* */

function translate(str) {
  var arr = ['a', 'e', 'i', 'o', 'u']
  var result = []
  var index = 0

  if (arr.indexOf(str.charAt(index)) !== -1) {
    return `${str}way`
  }else{
    while(arr.indexOf(str.charAt(index)) === -1){
      result.push(str.charAt(index))

      index += 1
    }
  }

  return `${str.substring(index)}${result.join('')}ay`;
}

translate("consonant");