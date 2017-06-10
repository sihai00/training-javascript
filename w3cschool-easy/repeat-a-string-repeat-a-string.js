/*
* 目标：重复操作
* 解释：重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串
* 例如：repeat("*", 3) 应该返回 "***".
* 
* */
function repeat(str, num) {
  var result = str.toString();
  var number = num;
  
  if(num < 0){
    return '';
  }else if(num === 1 || num === 0){
    return result;
  }else{
    while(number && number > 1){
      result += str;
      number -= 1;
    }
  }
  
  return result;
}

repeat("abc", 3);