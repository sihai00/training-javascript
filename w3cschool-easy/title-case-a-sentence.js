/*
* 目标：设置首字母大写
* 例如：I'm a little tea pot => I'm A Little Tea Pot
* 
* */
function titleCase(str){
  var result = str.toString()
  
  result = result.split(' ').map(v => {
    // 转为小写
    var vToLower = v.toLowerCase()
    // 设置首字母大写
    return vToLower.charAt(0).toUpperCase() + vToLower.substring(1)
  }).join(' ')

  return result
}

titleCase("I'm a little tea pot")