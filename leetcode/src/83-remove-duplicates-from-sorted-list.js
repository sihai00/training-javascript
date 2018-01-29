/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 给定一个有序链表，删除其中所有重复元素，使得每个元素只保留一次
 * 如：1->1->2，返回1->2
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head == null) return null
  var cur = head

  while(cur.next !== null){
    let next = cur.next

    if (next.val !== cur.val) {
      cur = next
    }else{
      cur.next = next.next
    }
  }

  return head
};
