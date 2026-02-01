/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // Very basic brute force 
    // let temp = [];
    // let zeroCount = 0;

    // for(let i = 0; i < nums.length; i++)
    // {
    //     if(nums[i] !== 0)
    //     {
    //         temp.push(nums[i]);
    //     }
    //     else zeroCount += 1;
    // } 
    // if (zeroCount > 0)
    // {
    //  for (let j = 0; j < zeroCount; j++)
    // {
    //     temp.push(0);
    // }
    // }

    // for (let k = 0; k < nums.length; k++)
    // {
    //     nums[k] = temp[k];
    // }

    // return nums;

    // A better approach using two pointers
    let l = 0;
    for (let r = 0; r < nums.length; r++)
    {
        if(nums[r] !== 0)
        {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
        }
    }
};