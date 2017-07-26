/**
 * 罗马转数字
 * @param {string} s
 * @return {number}
 */

 // 从前往后
var romanToInt = function(s) {
  var len = s.length
  var result = toNumber(s[0])
  for(var i = 1; i < len; i++){
    if (toNumber(s[i - 1]) < toNumber(s[i])) {
      result += toNumber(s[i]) - 2 * toNumber(s[i - 1])
    }else{
      result += toNumber(s[i])
    }
  }

  return +result
};

// 从后往前
var romanToInt2 = function(s){
  var result = 0
  var last = 0
  var cur = 0
  for(var i = s.length - 1; i >=0; i--){
    cur = toNumber(s[i])
    if (cur < last) {
      result -= cur
    }else{
      result += cur
      last = cur
    }
  }

  return result
}

function toNumber(n){
  switch (n) {  
    case 'I': return 1;  
    case 'V': return 5;  
    case 'X': return 10;  
    case 'L': return 50;  
    case 'C': return 100;  
    case 'D': return 500;  
    case 'M': return 1000;  
  }  
  return 0;
}