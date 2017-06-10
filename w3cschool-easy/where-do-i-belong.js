/*
* 目标：数组排序并插入值
* 解释：先给数组排序，然后找到指定的值在数组的位置，最后返回位置对应的索引
* 例如：where([10, 20, 30, 40, 50], 35) 应该返回 3
* 
* */

function where(arr, num) {
  if (!Array.from(arr) && typeof num !== 'number') return
  // 把目标数添加到数组上
  arr.push(num);
  // 排序后，只要查询目标数在数组中下标即可
  return arr.sort((a,b) => a-b).findIndex(v => v === num);
}

where([40, 60], 50);