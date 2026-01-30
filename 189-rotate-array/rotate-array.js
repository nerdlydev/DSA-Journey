/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // Brute force with O(N) TC and SC
    // let n = nums.length;
    // let temp = [];
    // for (let i = 0; i < n; i++)
    // {
    //     temp[(i+k) % n] = nums[i];
    // }
    // for( let j = 0; j < n; j++)
    // {
    //     nums[j] = temp[j];
    // }
    // return nums;

    // optimal one 
    let n = nums.length;
    k = k % n;
    
    nums.reverse();
    reversefun(nums, 0, k - 1);
    reversefun(nums, k , n - 1);

    function reversefun (nums, l, r )
    {
        while ( l < r)
        {
            [nums [l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    } 
    return nums;

};