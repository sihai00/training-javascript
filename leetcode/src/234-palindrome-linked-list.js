/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 思路：反转后半段链表，与前半段比较
 * 给一个链表，判断这个链表是否为回文链表
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) return true

  const mid = findMid(head)
  const last = mid.next
  const reverseLast = reverseList(last)

  mid.next = null
  const first = head

  return completeList(first, reverseLast)
};

const findMid = head => {
  let fast = head;
  let slow = head;

  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

const reverseList = head => {
  if (head === null || head.next === null) return head;

  let pre = null

  while (head) {
    const next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }

  return pre;
}

function completeList(first, last) {
  while(first && last){
    if (first.val !== last.val) return false

    first = first.next
    last = last.next
  }

  return true
}
