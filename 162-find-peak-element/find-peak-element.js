/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

//  ******* The Brute force *********
    // let n = nums.length; // Size of array

    // for (let i = 0; i < n; i++) {
    //     // Checking for the peak:
    //     if ((i === 0 || nums[i - 1] < nums[i])
    //             && (i === n - 1 || nums[i] > nums[i + 1])) {
    //         return i;
    //     }
    // }
    // // Dummy return statement
    // return -1;


    // **************** The optimal way ***************

    let n = nums.length; // Size of the array

    // Edge cases:
    if (n === 1) return 0;
    if (nums[0] > nums[1]) return 0;
    if (nums[n - 1] > nums[n - 2]) return n - 1;

    let low = 1, high = n - 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // If arr[mid] is the peak:
        if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1])
            return mid;

        // If we are in the left:
        if (nums[mid] > nums[mid - 1]) low = mid + 1;

        // If we are in the right:
        // Or, arr[mid] is a common point:
        else high = mid - 1;
    }
    // Dummy return statement
    return -1;


};