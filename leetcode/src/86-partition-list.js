/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 给出一个链表以及一个数x，讲链表重新整理，使得小于x的元素在前，大于等于x的元素在后
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head) return head
  var left = new ListNode(0), right = new ListNode(0)
  var leftIndex = left, rightIndex = right

  // 把小于x和大于等于x分为两个链表存储，最后再合并链表即可
  while(head !== null) {
    if (head.val < x) {
      left.next = head
      left = left.next
    }else{
      right.next = head
      right = right.next
    }

    head = head.next
  }

  right.next = null
  left.next = rightIndex.next
  return leftIndex.next
};
