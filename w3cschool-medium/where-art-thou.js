/*
* 目标：对象搜索
* 解释：返回参数1中包含参数2的对象
* 例如：where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) 应该返回 [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
* 
* */

function where(collection, source) {
  // 循环比较参数1是否满足参数2
  return collection.filter(v => {
    // 如果参数1和参数2全等，直接返回true
    if (JSON.stringify(v) === JSON.stringify(source)) {
      return true
    }
    // 因为参数2有可能不止一个对象，所以需要都满足
    // 我用exp记录参数1满足参数2的情况，满足一次，添加true。
    var len = Object.keys(source).length
    var exp = []

    for(var i of Object.keys(source)){
      source[i] === v[i] && exp.push(true)
    }
    
    // 如果都满足，必定是参数2的个数 === exp的个数
    if (exp.length === len) {
      return true
    }else{
      return false
    }
  })
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });