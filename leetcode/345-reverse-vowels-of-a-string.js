/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  if (!s) return s
  var arr = s.split(''), l = 0, r = arr.length - 1, tem = 0, reg = /[aeiou]/i

  while(l < r){
    if (!reg.test(arr[l])) {
      l += 1
      continue
    }
    if (!reg.test(arr[r])) {
      r -= 1
      continue
    }
    
    tem = arr[l]
    arr[l] = arr[r]
    arr[r] = tem
    l += 1
    r -= 1
  }

  return arr.join('')
};