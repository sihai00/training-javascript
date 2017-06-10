/*
* 目标：数组查询
* 解释：如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true
* 例如：["hello", "Hello"]应该返回true; ["hello", "hey"]应该返回false; mutation(["Mary", "Army"]) 应该返回 true
* 
* */

function mutation(arr) {
  if (!Array.isArray(arr)) return
  var str0 = arr[0].toLowerCase()
  var str1 = arr[1].toLowerCase()

  // 遍历查询str2中每一个元素是否被包含在str1中
  return str1.split('').every(function(v) {
    return str0.indexOf(v) !== -1
  })
}


function mutation2(arr) {
  if (!Array.isArray(arr)) return
  var str0 = arr[0].toLowerCase()
  var str1 = arr[1].toLowerCase()

  // 遍历查询str2中每一个元素是否被包含在str1中
  return !str1.split('').some(function(v) {
    return str0.indexOf(v) === -1
  })
}

mutation(["hello", "hey"]);
mutation2(["hello", "hey"]);