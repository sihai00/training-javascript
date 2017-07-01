/*
* 目标：函数迭代可选参数
* 解释：创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果
* 例如：add(2, 3) 应该返回 5
       add(2)(3) 应该返回 5
* 
* */

function add(...arg) {
  if (arg.some(v => typeof v !== 'number')) {
    return
  }
  if(arg.length === 1){
    return function(...arg2){
      return add(...arg.concat(arg2))
    }
  }else{
    return arg.reduce((pre, next) => pre + next)
  }
}

add(2, 3);