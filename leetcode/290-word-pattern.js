/**
 * 给定规则和字符串，寻找匹配规则的字符串
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var obj = {}
  var b = str.split(' ')

  if (pattern.length !== b.length) return false

  for (var i = 0; i < pattern.length; i++) {
    obj[pattern[i]] = obj[pattern[i]] ? obj[pattern[i]].concat([i]) : [i]
  }

  for(var i in obj){
    if (tem && tem === b[obj[i][0]]) return false
    var tem = b[obj[i][0]]

    for (var j = 0; j < obj[i].length; j++) {
      if (b[obj[i][j]] !== tem) return false
    }
  }

  return true
};

// more fast by other
function wordPattern(pattern, str) {
  const m = new Map();
  const n = new Map();
  const ss = str.split(' ');
  const ps = pattern.split('');
  if (ss.length != ps.length) return false;
  for (let i = 0; i < ss.length; i++) {
    if (m.has(ss[i])) {
      if (m.get(ss[i]) != ps[i]) return false;
    } else if (n.has(ps[i])) {
      if (n.get(ps[i]) != ss[i]) return false;
    } else { 
      m.set(ss[i], ps[i]);
      n.set(ps[i], ss[i]);
    }
  }
  return true;
};