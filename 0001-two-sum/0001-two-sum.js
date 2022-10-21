/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // for(let i = 0; i < nums.length; i++) {
    //     for (let j = i+1; j < nums.length; j++){
    //         if (nums[i] + nums[j] === target) {
    //             return [i,j]
    //         }
    //     }
    // }
    
    let count = {};
    for(let i = 0; i < nums.length; i++) {
        if(target - nums[i] in count) {
            return [count[target - nums[i]], i]
        } else {
            count[nums[i]] = i
        }
    }
};