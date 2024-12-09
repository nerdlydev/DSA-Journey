/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
    // Brute force  1
    // let n = nums.length;
    // if (n === 1) return arr[0];

    // for (let i = 0; i < n; i++) {
    //     // Check for first index
    //     if (i === 0) {
    //         if (nums[i] !== nums[i + 1])
    //             return nums[i];
    //     }
    //     // Check for last index
    //     else if (i === n - 1) {
    //         if (nums[i] !== nums[i - 1])
    //             return nums[i];
    //     }
    //     else {
    //         if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1])
    //             return nums[i];
    //     }
    // }

    // // Dummy return statement
    // return -1;


    // Brute force 2

    // let n = nums.length; // Size of the array
    // let ans = 0;
    // // XOR all the elements
    // for (let i = 0; i < n; i++) {
    //     ans = ans ^ nums[i];
    // }
    // return ans;

    
    //************** Optimal one  ***********************8

    let n = nums.length; // Size of the array

    // Edge cases:
    if (n === 1) return nums[0];
    if (nums[0] !== nums[1]) return nums[0];
    if (nums[n - 1] !== nums[n - 2]) return nums[n - 1];

    let low = 1, high = n - 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // If arr[mid] is the single element:
        if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
            return nums[mid];
        }

        // We are in the left:
        if ((mid % 2 === 1 && nums[mid] === nums[mid - 1])
                || (mid % 2 === 0 && nums[mid] === nums[mid + 1])) {
            // Eliminate the left half:
            low = mid + 1;
        }
        // We are in the right:
        else {
            // Eliminate the right half:
            high = mid - 1;
        }
    }

    // Dummy return statement:
    return -1;


};