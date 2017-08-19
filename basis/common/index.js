exports.swap = function(arr, a, b){
  var res = arr
  var sign = res[a]
  
  res[a] = res[b]
  res[b] = sign

  return res
}