/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let high = nums.length - 1;
    let low = 0;

    while (low <= high)
    {
        let mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] === target) return true;
        if (nums[low] === target || nums[high] === target) 
        {
            return true;
        } else {
            low++;
            high--;
        }
        // if (nums[low] <= nums[mid])
        // {
        //     low = low + 1;
        // } else {
        //     high = mid; 
        // }
    }
    return false;
};

