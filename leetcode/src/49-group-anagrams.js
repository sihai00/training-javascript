/**
 * 给定数组，按包含相同字母分组
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // 使用obj的键记录包含字母的子元素，值记录该子元素在数组中的位置
  var obj = {}
  var res = []

  strs.forEach(v => {
    let str = v.split('').sort().join('')

    if (obj[str] === undefined) {
      obj[str] = res.length
      res.push([v])
    }else{
      res[obj[str]].push(v)
    }
  })

  return res
};

