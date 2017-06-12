/*
* 目标：找出数组间差异
* 解释：比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异
* 例如：[1, 2, 3, 5], [1, 2, 3, 4, 5] 应该返回 [4]
* 
* */

function diff(arr1, arr2) {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) return
  var newArr = []

  arr1.forEach(v => {
    !arr2.includes(v) && newArr.push(v)
  })
    
  arr2.forEach(v => {
    !arr1.includes(v) && newArr.push(v)
  })

  return Array.from(new Set(newArr));
}

function diff2(arr1, arr2) {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) return
  var newArr = []

  arr1.filter(v => {
    arr2.indexOf(v) === -1 && newArr.push(v)
  })

  arr2.filter(v => {
    arr1.indexOf(v) === -1 && newArr.push(v)
  })

  return Array.from(new Set(newArr));
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);