/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var len = s.length
  var result = []

  for(var i = 0; i < len; i++){
    if ('({['.indexOf(s[i]) !== -1) {
      result.push(s[i])
    }else{
      if (result.length === 0) return false
      var left = result.pop()
      if ((left === '(' && s[i] === ')') || (left === '[' && s[i] === ']') || (left === '{' && s[i] === '}')) {
        continue
      }else{
        return false
      }
    }
  }
  if (result.length === 0) {
    return true
  }else{
    return false
  }
};