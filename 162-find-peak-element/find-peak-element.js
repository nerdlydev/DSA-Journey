/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let high = nums.length - 1;
    let low = 0;

    if(nums.length == 1) return 0;
    while (low < high)
    {
        let mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] < nums[mid + 1])
        {
            low = mid + 1;
        }
        else 
        {
            high = mid;
        }

    }
    return low;
};