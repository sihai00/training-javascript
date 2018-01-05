/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  var map = new Map()
  var cur = head

  while(cur !== null){
    let pre = cur.next

    if (!map.get(res)) {
      map.set(res, 1)
      cur = pre
    }else{
      cur = pre.next
    }
  }

  return head
};