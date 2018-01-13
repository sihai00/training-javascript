/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 归并两个有序的链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var result = []

  while(l1){
    result.push(new ListNode(l1.val))
    l1 = l1.next
  }

  while(l2){
    result.push(new ListNode(l2.val))
    l2 = l2.next
  }

  if (result.length === 0) return null

  result.sort(function(a, b) {
    return a.val - b.val;
  })
  
  for(var i = 0; i < result.length; i++){
    result[i].next = result[i + 1]
  }
  return result[0]
};

var mergeTwoLists = function(l1, l2) {
  var left = new ListNode(-1), leftIndex = left
  var right = new ListNode(-1), rightIndex = right
  var cur = new ListNode(-1), curIndex = cur

  left.next = l1
  right.next = l2

  while(left.next && right.next){
    if (left.next.val < right.next.val) {
      cur.next = new ListNode(left.next.val)
      left = left.next
    }else{
      cur.next = new ListNode(right.next.val)
      right = right.next
    }

    cur = cur.next
  }

  if (left.next) {
    cur.next = left.next
  }else{
    cur.next = right.next
  }

  return curIndex.next
};
