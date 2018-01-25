/**
 * 只能满足限定对应的符号[]、{}、()，利用栈的原理，当字符为左括号时入栈，当为又括号时，与栈顶比较是否对应
 * @param {string} s
 * @return {boolean}
 */

// 运用栈
var isValid = function(s) {
  var arr = []

  for (var i = 0; i < s.length; i++) {
    // 先把左括号推入栈
    if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
      arr.push(s[i])
    }else{
      // 当匹配右括号时，如果栈为空则返回false
      if (arr.length === 0) return false

      var top = arr.pop()
      var match = ''
      switch(s[i]){
        case ')':
          match = '('
          break
        case '}':
          match = '{'
          break
        case ']':
          match = '['
          break
        default:
          break
      }
      // 把栈顶元素与配对的右括号相比较
      if (top !== match) return false
    }
  }
  
  if (arr.length !== 0) {
    return false
  }else{
    return true
  }
};

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

var isValid = function(s) {
  var myStack = [];
  var result = true;
  for (var i =0; i < s.length; i++) {
    var popped;
    switch(s[i]) {
      case '{':
        myStack.push(s[i]);
        break;
      case '[':
        myStack.push(s[i]);
        break;
      case '(':
        myStack.push(s[i]);
        break;
      case '}':
        popped = myStack.pop();
        if (popped !== '{') {
            result = false;
            return result;
        } 
        break;
      case ']':
        popped = myStack.pop();
        if (popped !== '[') {
            result = false;
            return result;
        } 
        break;
      case ')':
        popped = myStack.pop();
        if (popped !== '(') {
            result = false;
            return result;
        } 
        break; 
    }
  }
  if (myStack.length> 0) {
      result = false;
  } 
  return result;
};