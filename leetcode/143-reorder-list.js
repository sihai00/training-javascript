/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 给链表 L: L0→L1→…→Ln-1→Ln,
 * 转换成 L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 思路：先中分两段链表，反转后链表，最后一一结合
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = head => {
  if (head === null || head.next === null) return

  const mid = findMid(head);
  const secondHalf = mid.next;
  const reversedSecondHalf = reverseList(secondHalf);

  mid.next = null;
  const firstHalf = head;

  mergeList(firstHalf, reversedSecondHalf);
};

const findMid = head => {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

const reverseList = head => {
  if (head === null || head.next === null) return head;

  let result = null

  while (head !== null) {
    const next = head.next;
    head.next = result;
    result = head;
    head = next;
  }

  return result;
}

const mergeList = (l1, l2) => {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  while (l1 !== null && l2 !== null) {
    const temp = l1.next;
    l1.next = l2;
    l2 = l2.next;
    l1.next.next = temp;
    l1 = temp;
  }
}
