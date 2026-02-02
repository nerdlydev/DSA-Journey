/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
//   let count0 = 0, count1 = 0, count2 = 0;

//     for(let i = 0; i < nums.length; i++)
//     {
//         if (nums[i] === 0) count0++;
//         else if (nums[i] === 1) count1++;
//         else count2++;

// }
// for(let i = 0; i < count0; i++ ) nums[i] = 0;
// for(let j = count0; j < count0 + count1; j++ ) nums[j] = 1;
// for(let k = count0 + count1; k < nums.length; k++ ) nums[k] = 2;

let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else { // nums[mid] === 2
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }

};