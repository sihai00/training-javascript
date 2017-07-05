/*
* 目标：库存更新
* 解释：依照一个存着新进货物的二维数组，更新存着现有库存(在 arr1 中)的二维数组. 如果货物已存在则更新数量 . 如果没有对应货物则把其加入到数组中，更新最新的数量. 返回当前的库存数组，且按货物名称的字母顺序排列
* 例如：updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) 应该返回 [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]
  思路：1.组合arr1和arr2，重组出符合要求数组
       2.对重组好的数组进行排序  
* */

function updateInventory(arr1, arr2) {
  var result = []
  var sum = [...arr1, ...arr2]

  sum.forEach(k => {
    // 判断当前元素是否存在于result中
    var sign = result.length > 0 && result.find(v => v[1] === k[1])
    // 重组数组
    if (sign) {
      result = result.map(v => v[1] === k[1] ? [k[0] + v[0], k[1]] : v)
    }else{
      result.push(k)
    }
  })
  // 排序
  result.forEach(v => {
    result = result.sort((a, b) => a[1] > b[1])
  })

  return result
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
