class TreeNode {
    val;
    left;
    right;
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
function sortedArrayToBST(nums) {
    // binary search
    // take middle
    // take left side of array => make balanced tree
    // take right side of array => make balanced tree
    return helper(nums, 0, nums.length - 1);
}
;
//[1,3]
//=> 0, 1 (inklusiv)
//=> middle = 1 = zahl 3
//=> call mit 0,0; 2,1;
function helper(nums, startIdx, endIdx) {
    if (startIdx === endIdx) {
        return new TreeNode(nums[startIdx], null, null);
    }
    if (startIdx > endIdx) {
        return null;
    }
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    const middle = nums[middleIdx];
    return new TreeNode(middle, helper(nums, startIdx, middleIdx - 1), helper(nums, middleIdx + 1, endIdx));
}
export {};
