/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function(nums) {  // the brute force 
//     let n = nums.length; // size of the array.
//     let mini = Infinity;
//     for (let i = 0; i < n; i++) {
//         // Always keep the minimum.
//         mini = Math.min(mini, nums[i]);
//     }
//     return mini;    
// };

// the better one 

var findMin = function(nums) {
    let low = 0, high = nums.length - 1;
    let ans = Infinity;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // If left part is sorted:
        if (nums[low] <= nums[mid]) {
            // Keep the minimum:
            ans = Math.min(ans, nums[low]);

            // Eliminate left half:
            low = mid + 1;
        } else { // If right part is sorted:
            // Keep the minimum:
            ans = Math.min(ans, nums[mid]);

            // Eliminate right half:
            high = mid - 1;
        }
    }
    return ans;
};