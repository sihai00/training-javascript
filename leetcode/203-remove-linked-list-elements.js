/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 在链表中删除值为val的所有节点
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var cur = new ListNode(0), curIndex = cur
  cur.next = head

  while(cur.next !== null){
    if (cur.next.val === val) {
      cur.next = cur.next.next
    }else{
      cur = cur.next
    }
  }

  return curIndex.next
};
