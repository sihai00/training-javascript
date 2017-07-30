/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
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