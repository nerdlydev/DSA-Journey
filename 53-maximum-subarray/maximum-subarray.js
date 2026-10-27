/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    // Brute force and not optimal got time limit exceed
    // let maxSum = nums[0];
    // for (let i = 0; i < nums.length; i++)
    // {
    //     let sum = 0;
    //     for(let j = i; j < nums.length; j++)
    //     {
    //         sum += nums[j];
    //         maxSum = Math.max(maxSum, sum);
    //     }
    // }
    // return maxSum;

 // //Another try for a better approach but failed after 142/210 testcases passed 
//     let pfs = 0;
//     let sfs = 0;
//     let maxSum = -Infinity;

//     for (let i = 0; i < nums.length; i++)
//     {
//         pfs += nums[i];
//         sfs += nums[nums.length - 1 - i];

//         maxSum = Math.max(maxSum,pfs,sfs);
//     }
// return maxSum;    // this approach can't go fruther because we are not calculating the middle subarrays so it will fail eventually but we can learn from it make it a better prefix sum approach 
let prefix = 0;
let minSum = 0;
let maxSum = -Infinity;

for ( let i = 0; i < nums.length; i++)
{
    prefix += nums[i];
    maxSum = Math.max(maxSum, prefix - minSum);
    if(prefix < minSum) 
    {
        minSum = prefix;
    }
}
return maxSum;
};