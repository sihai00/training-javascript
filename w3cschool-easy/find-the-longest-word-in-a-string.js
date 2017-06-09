/*
* 目标：寻找最长的单词
* 解释：找到提供的句子中最长的单词，并计算它的长度，返回长度
* 例如：The quick brown fox jumped over the lazy dog => 6
* 
* */
function findLongestWord(str){
  var result = str.toString()
  var max = 0
  // Math.max返回两个参数中最大值
  str.split(' ').forEach(v => {
    max = Math.max(max, v.length)
  })

  return max
}

findLongestWord('The quick brown fox jumped over the lazy dog')