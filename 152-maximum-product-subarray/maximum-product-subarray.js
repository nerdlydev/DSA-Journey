/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    /**
    This problem can be solved in multiple ways like iterating every possible product , using a hashmap etc
     */
     // This is my first intusion brute force where we are calculating each an every possible product
    let Maxproduct = nums[0];
    for ( let i = 0; i < nums.length; i++)
    {
        let product = 1;
        for( let j = i; j < nums.length; j++)
        {
            product *= nums[j];
        Maxproduct = Math.max(Maxproduct,product);
        }
    }

    return Maxproduct; 
};