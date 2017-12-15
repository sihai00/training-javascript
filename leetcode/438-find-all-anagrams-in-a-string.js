/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  var l = 0, r = p.length - 1, res = [], tem = [], bol = true

  while(l < s.length){
    if (r + 1 > s.length) break

    tem = s.substring(l, r + 1)
    for (var i = 0; i < p.length; i++) {
      if (tem.indexOf(p[i]) === -1) {
        bol = false
        break
      }
    }

    if (bol) {
      res.push(l)
    }

    l ++
    r ++
    bol = true
  }

  return res
};