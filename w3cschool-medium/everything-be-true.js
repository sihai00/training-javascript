/*
* 目标：数组元素判断
* 解释：如果集合(collection)中的所有对象都存在对应的属性(pre)，并且属性(pre)对应的值为真。函数返回ture。反之，返回false
* 例如：every([{"single": "yes"}], "single") 应该返回 true
       every([{"single": ""}, {"single": "double"}], "single") 应该返回 false
* 
* */

function every(collection, pre) {
  if (!Array.isArray(collection)) return

  return collection.every(v => {
    return !!v[pre]
  })
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");