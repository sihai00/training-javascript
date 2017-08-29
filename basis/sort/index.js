var common = require('../common')
var selectSort = require('./selectSort')
var insertSort = require('./insertSort')
var shellSort = require('./shellSort')
var mergeSort = require('./mergeSort')
var quickSort = require('./quickSort')
var bubbleSort = require('./bubbleSort')
var heapify = require('./heapify')
var heapify0 = require('./heapify0')
var heapifyIndex = require('./heapifyIndex')

// 随机数
var param = common.randomNumber(6, 10, 100)

// 执行
// var res0 = common.runFunTime('arrSort', (arr) => arr.sort((a, b) => a - b), [param])
// var res1 = common.runFunTime('selectSort', selectSort, [param])
// var res2 = common.runFunTime('insertSort', insertSort, [param])
// var res22 = common.runFunTime('shellSort', shellSort, [param])
// var res3 = common.runFunTime('mergeSort', mergeSort, [param])
// var res4 = common.runFunTime('quickSort', quickSort, [param])
// var res5 = common.runFunTime('bubbleSort', bubbleSort, [param])

// 验证
// common.isSort(res0, false)
// common.isSort(res1, false)
// common.isSort(res2, false)
// common.isSort(res22, false)
// common.isSort(res3, false)
// common.isSort(res4, false)
// common.isSort(res5, false)
// console.log(param)

var arr = heapifyIndex.heapify([1,2,3,4])
console.log(arr)

