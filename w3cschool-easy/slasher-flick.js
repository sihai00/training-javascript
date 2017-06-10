/*
* 目标：数组截断
* 解释：返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始
* 例如：slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) 应该返回 ["cheese", 4]
* 
* */

function slasher(arr, howMany) {
  if (!Array.isArray(arr) && typeof howMany !== 'number') return

  arr.splice(0, howMany)
  return arr;
}

slasher([1, 2, 3], 2);