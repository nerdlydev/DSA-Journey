/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    const n = nums.length;
    let count = 1;
    for (let i = 1; i <= 2*n; i++)
    {
        if(nums[(i - 1) % n] <= nums[i % n]) {
            count += 1;
        }
        else count = 1;

        if (count === n) return true; 
    }
    return n === 1;
};