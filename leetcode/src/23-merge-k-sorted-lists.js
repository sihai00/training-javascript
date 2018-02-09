/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 有k个有序数组，将他们归并为一个有序数组
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    return cutList(lists, 0, lists.length-1)
 }

var cutList = function( lists, start, end){
  if(start == end) return lists[start]

  if(start < end){
    let middle = Math.trunc((start+end)/2)
    let listA = cutList(lists, start, middle)
    let listB = cutList(lists, middle+1, end)

    return merge(listA, listB)
  }else{ 
    return null
  }
}

var merge = function(listA, listB){
  if(listA == null) return listB
  if(listB == null) return listA

  if(listA.val < listB.val){
    listA.next = merge(listA.next, listB)
    return listA
  }else{
    listB.next = merge(listA, listB.next)
    return listB
  }
}