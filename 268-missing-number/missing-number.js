/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // The brute force with O(2N) TC
// let elSum = 0;
// let idxSum = 0;
// for(let i = 0; i < nums.length; i++)
// {
// elSum = nums[i] + elSum;
// };

// for(let j = 1; j <= nums.length; j++)
// {
//     idxSum = j + idxSum;
// }

// return idxSum - elSum;


// The optimal one 
let n = nums.length;
let expectedSum = n*(n+1)/2;
let actualSum = 0;

for (let i = 0; i < n; i++)
{
    actualSum += nums[i];
}

return expectedSum - actualSum;

}
