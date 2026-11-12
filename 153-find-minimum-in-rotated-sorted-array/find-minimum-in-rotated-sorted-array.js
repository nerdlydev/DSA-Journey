/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let high = nums.length - 1;
    let low = 0;
    let ans = 0;


    while (low < high)
    {
        let mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] > nums[high])
        {
            low = mid + 1;
        } else {
            high = mid; 
        }

    }
    return nums[low];
};