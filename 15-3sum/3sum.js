/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // A simple brute force is using three loops get the values but the time complaxity will be O(N^3) which is like this and bad for interview 
    // const result = [];
    // const seen = new Set();
    // for (let i = 0; i < nums.length; i++)
    // {
    //     for (let j = i + 1; j < nums.length; j++)
    //     {
    //         for (let k = j + 1; k < nums.length; k++)
    //         {
    //             if(nums[i] + nums[j] + nums[k] === 0)
    //             {
    //                 const key = [nums[i], nums[j], nums[k]].sort((a,b) => a-b).join(',');
    //                 if (!seen.has(key)) {
    //                     seen.add(key);
    //                     result.push([nums[i], nums[j], nums[k]]);
    //             }
    //             }
    //         }
    //     }
    // }
    // return result;

    // sort + two pointer 
    nums.sort((a,b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 2; i++)
    {
        if ( i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;

        while( l < r )
        {
            const sum = nums[i] + nums[l] + nums[r];

            if (sum < 0) 
            {
                l++;
            }
            else if(sum > 0) 
            {
                r--;
            } else {
                
                result.push([nums[i], nums[l], nums[r]]);
            
                while (l < r && nums[l] === nums[l+1])
                {
                    l++;
                }
                while (l < r && nums[r] === nums[r-1])
                {
                    r--;
                }

                l++;
                r--;

            }
        }

    }

    return result;

};