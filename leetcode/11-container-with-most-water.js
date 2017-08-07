/**
 * 问题：给你一个顶点数组，例如{4,7,9}，这个定点数组代表直角坐标系上三个点，(1,4)，(2,7)，(3,9)，然后过这三个点，分别作垂直于X轴的线段，例如对于(1,4)，线段的两个端点为(1,4)和(1,0)，然后，我们可以得到三条垂直于X轴的线段。从这些线段中找出一对组合，使得，这对组合的   横坐标之差  乘以  两条线段中较短者的长度    的乘积最大

 * 解题：最大盛水量取决于两边中较短的那条边，而且如果将较短的边换为更短边的话，盛水量只会变少。所以我们可以用两个头尾指针，计算出当前最大的盛水量后，将较短的边向中间移，因为我们想看看能不能把较短的边换长一点。这样一直计算到左边大于右边为止就行了
 
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height.length === 0) return 0

  var left = 0
  var right = height.length - 1
  var area = 0

  while(left >= 0 && right < height.length && left < right){
    area = Math.max(area, Math.min(height[left], height[right]) * (right - left))

    if (height[left] < height[right]) {
      left ++
    }else{
      right --
    }
  }

  return area
};