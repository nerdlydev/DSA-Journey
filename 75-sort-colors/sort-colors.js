/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;

    // Pass 1: Move all 0s to the beginning
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            [nums[left], nums[i]] = [nums[i], nums[left]];
            left++;
        }
    }

    // Pass 2: Move all 1s after the 0s
    for (let i = left; i < nums.length; i++) {
        if (nums[i] === 1) {
            [nums[left], nums[i]] = [nums[i], nums[left]];
            left++;
        }
    }

    // let low = 0, mid = 0, high = nums.length - 1;
    // while (mid <= high) {
    //     if (nums[mid] === 0) {
    //         [nums[low], nums[mid]] = [nums[mid], nums[low]];
    //         low++;
    //         mid++;
    //     } else if (nums[mid] === 1) {
    //         mid++;
    //     } else {
    //         [nums[mid], nums[high]] = [nums[high], nums[mid]];
    //         high--;
    //     }
    // }
};


