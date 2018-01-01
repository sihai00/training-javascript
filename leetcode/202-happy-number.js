/**
 * 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n === 1) return true
  var t = n, obj = {}

  while(true){
    t = `${t}`.split('').reduce((pre, next) => pre + Math.pow(+next, 2), 0)
    obj[t] = obj[t] ? obj[t] + 1 : 1

    // 不重复
    if (obj[t] > 1)return false
    // 不等于初始
    if (t === n) return false
    if (t === 1) return true
  }
};