/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(target < nums[0]) return 0
    for(i=0; i < nums.length; i++){
        if(nums[i] === target) {
            return i
        } else if(nums[i] < target && target < nums[i+1]) {
            return i+1
        } else if (i === nums.length-1) {
            return nums.length
        }
    }
};