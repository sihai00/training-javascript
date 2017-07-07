/*
* 目标：排列组合去重
* 解释：把一个字符串中的字符重新排列生成新的字符串，返回新生成的字符串里没有连续重复字符的字符串个数.连续重复只以单个字符为准
* 例如：permAlone("aab") 应该返回 2, permAlone("aabb") 应该返回 8
* 思路：分两步，1.排列组合 2.去除连续重复字符的元素
      1.排列组合：从后往前，逐一全排列。例如abc，取出1，那么bc全排列得到bc和cb，然后a逐一往里面插入，例如bc => abc,bac,bca
      2.去除连续重复字符的元素：这个简单，循环元素，比较前一个元素和后一个元素，如果相同去除即可
* */

function continueArr(str){
  if (str.length === 2){
    // 交换位置-得到全排列
    var arr = str.split('')
    return [arr, [...arr].reverse()]
  }else{
    var first = str[0]
    var end = str.substring(1)
    var result = []
    // 把得到的全排列数组和前一个元素进行全排列
    continueArr(end).forEach(v => {
      var val = [...v]
      for(var i = 0; i <= v.length; i++){
        var res = [...val]
        res.splice(i, 0, first)
        result.push(res.join(''))
      }
    })
    return result
  }
}

function permAlone(str) {
  var result = []

  // 获取str的排列组合数组
  result = continueArr(str)

  // 去除连续重复字符的元素
  result = result.filter(v => {
    var pre = ''
    var bool = true
    for(var i of v){
      if (pre === i) {
        bool = false
        break
      }else{
        bool = true
        pre = i
      }
    }
    return bool
  })
  return result.length;
}

permAlone('abc');