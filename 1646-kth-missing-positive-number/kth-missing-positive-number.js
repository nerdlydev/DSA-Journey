/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    // The brute force
    // for (let i = 0; i<= arr.length; i++)
    // {
    //     if (arr[i] <= k)
    //     {
    //         k += 1;
    //     } else {
    //         break;
    //     }
    // }
    // return k;

    // The optimal approach
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let missing = arr[mid] - (mid + 1);
        if (missing < k) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return k + high + 1;

};

