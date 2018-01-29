/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var max = ''
  var i = 0
  var len = s.length

  for(; i < len; i++){
    find(s, i, 0)
    find(s, i, 1)
  }

  return max

  function find(str, index, offer){
    var left = index
    var right = index + offer
    var cur = ''

    while(left >= 0 && right < len && (str.charAt(left) === str.charAt(right))) {
      left -= 1
      right += 1
    }

    cur = str.substring(left + 1, right)
    if (cur.length > max.length) {
      max = cur
    }
  }
};

