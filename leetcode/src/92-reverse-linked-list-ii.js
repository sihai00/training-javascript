/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 反转一个链表从m到n的元素
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    
    if(head == null || m == n) return head;
    
    var dummy = new ListNode(0);
    dummy.next = head;
    var pre = dummy;
    
    for(var i = 0; i < m-1; i++){
        pre = pre.next;
    }
    
    var start = pre.next, then = start.next;
    
    for(var i = 0; i < n-m; i++){
        start.next = then.next;
        then.next = pre.next;
        pre.next = then;
        then = start.next;
    }
    
    return dummy.next;
    
};