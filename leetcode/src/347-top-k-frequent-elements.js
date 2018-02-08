/**
 * 给定一个非空的数组，返回前k个出现频率最高的元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var obj = {}, arr = []

  // 统计数字出现的频率
  for (var i = 0; i < nums.length; i++) {
    var res = obj[nums[i]]
    obj[nums[i]] = res ? res + 1 : 1
  }

  // 遍历
  for(let i of Object.keys(obj)){
    var min = arr[arr.length - 1]

    // 维护结果数组的长度为k值
    if (arr.length < k) {
      arr.push({
        key: i,
        num: obj[i]
      })
    }else{
      // 只有当结果数组长度的最小值比当前值小时，把最小值推出结果数组，把当前值推入结果数组
      if (min.num < obj[i]) {
        arr.pop()
        arr.push({
          key: i,
          num: obj[i]
        })
      }
    }

    // 保持结果数组的有序性
    arr.sort((a, b) => b.num - a.num)
  }

  return arr.map(v => Number(v.key))
};
