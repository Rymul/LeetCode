/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let current = new ListNode(-1);
    let tempHead = current;
    

    while(list1 || list2) {
        if(list1 === null || (list2 !== null && list1.val >= list2.val)){
            current.next = list2
            current = current.next
            list2 = list2.next
        } else {
            current.next = list1
            current = current.next
            list1 = list1.next
        }    
    }
    return tempHead.next

};