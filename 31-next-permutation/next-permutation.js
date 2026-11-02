/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 function reverse(nums, left, right) {
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];

        left++;
        right--;
    }
}

var nextPermutation = function(nums) {
    let pvt = -1;

    // Step 1: Find pivot
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            pvt = i;
            break;
        }
    }

    // Step 2: If no pivot, reverse entire array
    if (pvt === -1) {
        reverse(nums, 0, nums.length - 1);
        return;
    }

    // Step 3: Find next greater element and swap
    for (let i = nums.length - 1; i > pvt; i--) {
        if (nums[i] > nums[pvt]) {
            [nums[i], nums[pvt]] = [nums[pvt], nums[i]];
            break;
        }
    }

    // Step 4: Reverse suffix
    reverse(nums, pvt + 1, nums.length - 1);

    return;
};

