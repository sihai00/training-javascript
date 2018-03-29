/**
 * 题意：给出一个数字字符串，为这个数字字符串加上三个点，使其成为一个合法的ip地址，返回所有的合法ip地址
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let arr = []

  // ip: s
  // idx: 循环次数
  // restored: 单个ip结果
  // count: 点数
  let restoreIp = function(ip, idx, restored, count){
    if (count > 4) return
    if (count === 4 && idx === ip.length) arr.push(restored)

    for (var i = 1; i < 4; i++) {
      if (idx + i > ip.length) break

      let s = ip.substring(idx, idx + i)
      if ((s[0] === '0' && s.length > 1) || (i == 3 && parseInt(s) >= 256)) continue;
      restoreIp(ip, idx + i, restored + s + (count == 3 ? '' : '.'), count + 1)
    }
  }
  
  restoreIp(s, 0, '', 0)

  return arr
};
