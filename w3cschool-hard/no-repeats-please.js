/*
* 目标：排列组合去重
* 解释：把一个字符串中的字符重新排列生成新的字符串，返回新生成的字符串里没有连续重复字符的字符串个数.连续重复只以单个字符为准
* 例如：permAlone("aab") 应该返回 2
* */

function continueArr(str){
  if (str.length === 1){
    return str
  }else{
    // var first = str[0]
    // var end = str.substring(1)
    // return end.split('').map(v => {
    //   var res = continueArr(end.split('').filter(x => x !== v).join(''))
    //   return res.length === 1 ? (res + v + first) : res.map(w => first + v + w)
    // })
    str.split('').forEach(v => {
      
    })
  }
}

function permAlone(str) {
  var result = []
  // 获取str的排列组合数组

  result = continueArr(str)

  // 去重
  // result = [...new Set(result)]
  return str;
}

permAlone('abc');