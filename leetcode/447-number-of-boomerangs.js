/**
 * 给出一个平面上的n个点，寻找存在多少个由这些点构成的三元组（i,j,k）,
 * 使得i,j两点的距离等于i,k两点的距离。其中n最多为500，且所有的点坐标范围在[-10000, 10000]之间
 * 例如：[[0,0], [1,0], [2,0]]，则结果为2
 * 两个结果为[[1,0],[0,0],[2,0]]和[[1,0],[2,0],[0,0]]
 *
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  var res = 0

  for (var i = 0; i < points.length; i++) {
    let map = new Map()
    for (var j = 0; j < points.length; j++) {
      if (i !== j) {
        let dis = getDis(i, j)
        let count = ~~map.get(dis)
        map.set(dis, count + 1)
      }
    }

    map.forEach(v => {
      if (v > 1) {
        res += v * (v - 1)
      }
    })
  }

  return res

  function getDis(i, j){
    return (points[i][0] - points[j][0]) * (points[i][0] - points[j][0]) + 
    (points[i][1] - points[j][1]) * (points[i][1] - points[j][1])
  }
};