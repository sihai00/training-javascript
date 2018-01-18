/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 给定链表中的一个节点，删除该节点
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  if (!node) return node
  
  // 把下一个节点的值复制到当前节点，然后当前节点指向下下个节点
  node.val = node.next.val
  node.next = node.next.next
};
