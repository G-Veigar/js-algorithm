// https://leetcode-cn.com/problems/reverse-linked-list/

var reverseList = function(head) {
    if(!head || !head.next ) return head
    let last = reverseList(head.next)
    head.next.next = head
    head.next = null
    return last
}