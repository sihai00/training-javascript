/**
 * 给定一个Unix下的路径，简化这个路径
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  var math = /\/([^\/]+)/g
  var arr = path.match(math)
  var stack = []

  if (!arr) return '/'
  if (arr.length === 1) {
    if (arr[0] === '/.' || arr[0] === '/..') return '/'
  }

  for (var i = 0; i < arr.length; i++) {
    switch(arr[i]){
      case '/..':
        stack.pop()
        break
      case '/.':
        break
      default:
        stack.push(arr[i])
    }
  }

  return stack.length === 0 ? '/' : stack.join('')
};