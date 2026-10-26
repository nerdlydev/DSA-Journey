/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    /**
    This problem can be solved in multiple ways like iterating every possible product , using a hashmap etc
     */
     // This is my first intusion brute force where we are calculating each an every possible product
    // let Maxproduct = nums[0];
    // for ( let i = 0; i < nums.length; i++)
    // {
    //     let product = 1;
    //     for( let j = i; j < nums.length; j++)
    //     {
    //         product *= nums[j];
    //     Maxproduct = Math.max(Maxproduct,product);
    //     }
    // }

    // return Maxproduct;

    // pre fix and sufix way 
    // We are moving left to right and right to left using two pointers 
    let pfp=1;
    let sfp=1;
    let ans = Number.NEGATIVE_INFINITY;  // 

    for(let i = 0; i < nums.length; i++)
    {
        if (pfp === 0) pfp = 1;
        if (sfp === 0) sfp = 1;

        pfp *= nums[i];
        sfp *= nums[nums.length -1 - i];

        ans = Math.max(ans, pfp, sfp);
    }
return ans;
};