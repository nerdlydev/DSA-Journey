/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    // The brute force
    for (let i = 0; i<= arr.length; i++)
    {
        if (arr[i] <= k)
        {
            k += 1;
        } else {
            break;
        }
    }
    return k;
};