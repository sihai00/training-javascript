/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows <= 0) {
    return ''
  }
  if (numRows === 1 && numRows <= s.length) {
    return s
  }
  var str = ''
  var len = s.length

  for(var i = 0; i < len && i < numRows; ++i){
    var start = i
    str += s.charAt(i)

    for(var j = 1; start < len; ++j){
      if (i === 0 || i === numRows - 1) {
        start += 2 * numRows - 2
      }else{
        if (j % 2 === 1) {
          start += 2 * (numRows - i - 1)
        }else{
          start += 2 * i
        }
      }
      if (start < len) {
        str += s.charAt(start)
      }
    }
  }

  return str
};