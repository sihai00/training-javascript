/*
* 目标：字符配对(首先得了解碱基队的概念，即A—T， G—C，A—U相互作用)
* 解释：依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回
* 例如：对于输入的 GCG，相应地返回 [["G", "C"], ["C","G"],["G", "C"]]
* 
* */
function pair(str){
  return str.split('').map(v => {
    if (['G', 'C'].indexOf(v) !== -1) {
      return [v, v === 'G' ? 'C' : 'G']
    }else if(['A', 'T'].indexOf(v) !== -1){
      return [v, v === 'A' ? 'T' : 'A']
    }else if(['U'].indexOf(v) !== -1){
      return ['U', 'A']
    }
  })
}


function pair1(str) {
  if (typeof str !== 'string') return 
  // 碱基配对数组
  var arr = [['G', 'C'], ['A', 'T'], ['U']]
  var result = []
  // 获取目标
  str.split('').map(v => {
    // 匹配目标是否为碱基对
    arr.some(k => {
      if (k.indexOf(v) === -1) {
        return false
      }else{
        result.push([v, k.filter(g => g !== v)[0]])
        return true
      }
    })
  })

  return result
}

pair("GCG");