/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 给定一个有序列表，将其中有重复的元素全部删除
 * 思路：在循环内循环判断当前节点与下一个节点是否相等
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  var cur = new ListNode(0), curIndex = cur
  cur.next = head

  while(cur.next){
    let curnext = cur.next

    while(curnext.next && curnext.val === curnext.next.val){
      curnext = curnext.next
    }

    if (curnext !== cur.next) {
      cur.next = curnext.next;
    }else{
      cur = cur.next
    }
  }

  return curIndex.next
};
