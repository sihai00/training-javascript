/**
 * 给定两个字符串，判断是否相匹配
 * "egg" => "add"
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  var a = new Map()
  var b = new Map()
  if (s.length !== t.length) return false

  for (var i = 0; i < s.length; i++) {
    if (a.has(s[i])) {
      if (a.get(s[i]) !== t[i]) return false
    }else if(b.has(t[i])){
      if (b.get(t[i]) !== s[i]) return false
    }else{
      a.set(s[i], t[i])
      b.set(t[i], s[i])
    }
  }

  return true
};