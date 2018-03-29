/**
 * 题意：给定一个数字，按照手机上数字对应的字母分别进行组合
 * 思路：假定给23
        1.输入2，得到[a,b,c]
        2.输入3，先推出a，加入[def]，得到[b,c,ad,ae,af]，依次
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let res = []
  var letterMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  }

  if (!digits) return res

  var findCombination = function(digits, index, s) {
    if (digits.length === index) {
      res.push(s)
      return
    }

    let c = digits[index]
    let letters = letterMap[c]

    if (c >= '0' && c <= '9' && c !== '1') {
      for (var i = 0; i < letters.length; i++) {
        findCombination(digits, index + 1, s + letters[i])
      }
    }
    return
  };

  findCombination(digits, 0, '')

  return res
};

var letterCombinations = function(digits) {
  if (+digits < 0) return []
  var param = `${digits}`
  var sign = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e' ,'f'],
    '4': ['g', 'h' ,'i'],
    '5': ['j', 'k' ,'l'],
    '6': ['m', 'n' ,'o'],
    '7': ['p', 'q' ,'r', 's'],
    '8': ['t', 'u' ,'v'],
    '9': ['w', 'x' ,'y', 'z']
  }
  var result = []
  var len = 0

  for (var i = 0; i < param.length; i++) {
    if (len === 0) {
      result = [...result, ...sign[param[i]]]
    }else{
      for (var j = 0; j < len; j++) {
        var l = result.shift()
        result = [...result, ...sign[param[i]].map(v => l + v)]
      }
    }
    len = result.length
  }

  return result
};