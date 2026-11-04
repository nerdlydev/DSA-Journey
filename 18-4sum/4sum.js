/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    // my brute force approach will be a four solution to get each value that will be n^4 that will too high so I will try to optimize it like we did with 3 sum and make it under n^3 possibally 
    // sort + two pointer 
    nums.sort((a,b) => a - b);

    const result = [];
for (let k  = 0 ; k < nums.length - 3; k++)
{
    if ( k > 0 && nums[k] === nums[k - 1]) continue;
    for (let i = k + 1; i < nums.length - 2; i++)
    {
        if (i > k + 1 && nums[i] === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;

        while( l < r )
        {
            const sum = nums[i] + nums[l] + nums[r] + nums[k];

            if (sum < target) 
            {
                l++;
            }
            else if(sum > target) 
            {
                r--;
            } else {
                
                result.push([nums[i], nums[l], nums[r], nums[k]]);
            
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
}
return result;
}