/*
* 目标：数组分割
* 解释：把一个数组arr按照指定的数组大小size分割成若干个数组块
* 例如：chunk([1,2,3,4],2)=[[1,2],[3,4]]; chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];
* 
* */

function chunk(arr, size) {
  if (!Array.isArray(arr) && typeof size !== 'number') return

  var loopNum = Math.floor(arr.length / size)
  var result = []

  while(loopNum > 0){
    result.push(arr.splice(0, size))

    loopNum -= 1
  }

  if(arr.length > 0){
    result.push(arr)
  }
  
  return result.push(arr);
}

chunk(["a", "b", "c", "d"], 2);