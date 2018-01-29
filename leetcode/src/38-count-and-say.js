/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return '1'
  
  var str = countAndSay(n - 1) + '*'
  var c = `${str}`
  var count = 1
  var s = ''

  for (var i = 0; i < c.length - 1; i++) {
    if(c[i] == c[i+1]){
      count++
    }else{
      s += count + c[i]
      count = 1
    }
  }

  return s
};