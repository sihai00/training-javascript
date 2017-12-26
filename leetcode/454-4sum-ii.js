/**
 * 给定四个整型数组，寻找有多少个i、j、k、l，使得A[i] + B[j] + C[k] + D[l] = 0
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  let map = new Map()
  let res = 0

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let num = A[i] + B[j]
      map.set(num, (map.get(num) || 0) + 1)
    }
  }

  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      let num = 0 - C[i] - D[j]
      // 当前CD匹配AB中的个数
      if (map.has(num)) res += map.get(num)
    }
  }

  return res
};

