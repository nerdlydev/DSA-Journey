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
        if (nums[low] === target || nums[high] === target) return true;
        if (nums[low] === nums[mid] && nums[mid] === nums[high]) 
       {
            low++;
            high--;
            continue;
        }
        if (nums[low] <= nums[mid])
        {
           if (nums[low] <= target && target < nums[mid])
           {
            high = mid - 1;
           } else {
            low = mid + 1;
           }
           
        } else {
            if (nums[mid] < target && target <= nums[high])
           {
            low = mid + 1;
           } else {
            high = mid - 1;
           }
        }
    }
    return false;
};

