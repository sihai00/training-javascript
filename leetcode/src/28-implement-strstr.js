/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.search(needle)
};

// more fast by other people
var strStr = function(haystack, needle) {
  if (!needle || haystack === needle) return 0

  if (!haystack || haystack.length < needle.length) return -1

  for(var i = 0; i <= haystack.length - needle.length; i++){
    if (haystack.substr(i, needle.length) === needle) {
      return i
    }
  }

  return -1
};