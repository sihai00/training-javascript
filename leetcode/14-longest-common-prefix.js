/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''
  if (strs.length === 1) return strs[0]
  var result = ''

  for(var i = 0; i < strs[0].length; i++){
    result += strs[0][i]
    for(var j = 1; j < strs.length; j++){
      var str = strs[j].substring(0, i + 1)
      if(strs[j].indexOf(result) === -1 || result !== str) {
        return result.slice(0, -1)
      }
    }
  }
  return result
};