/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let high = nums.length - 1;
    let low = 0;

    while (low < high)
    {
        let mid = Math.floor(low + (high - low) / 2);
        mid = mid % 2 === 0 ? mid : mid - 1;
        if (nums[mid] === nums[mid + 1])
        {
            low = mid + 2;
        } else {
            high = mid;
        }

    }
    return nums[low];
};