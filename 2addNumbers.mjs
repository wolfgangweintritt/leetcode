class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function addTwoNumbers(l1, l2) {
    return addListNodes(l1, l2, 0);
}
;
function addListNodes(l1, l2, carryOver) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carryOver;
    const digit = sum % 10;
    const newCarryOver = Math.floor(sum / 10);
    const l1Next = l1 === null ? null : l1.next;
    const l2Next = l2 === null ? null : l2.next;
    if (l1Next === null && l2Next === null && newCarryOver === 0) {
        return new ListNode(digit, null); // TODO can 1st and 2nd if be merged?
    }
    return new ListNode(digit, addListNodes(l1Next, l2Next, newCarryOver));
}
export {};
