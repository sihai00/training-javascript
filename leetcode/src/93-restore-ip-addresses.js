/**
 * 题意：给出一个数字字符串，为这个数字字符串加上三个点，使其成为一个合法的ip地址，返回所有的合法ip地址
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let res = []
  let index = 1

  let findConbination = function(arr, index, s){
    if (index > 4) {
      if (!s) res.push(arr)
      return
    }

    for (var i = 1; i <= 3; i++) {
      let v = s.substring(0, i)
      arr.push(v)
      findConbination(arr, index + 1, s.slice(i))
    }

    return
  }

  findConbination([],index, s)

  return res
};
