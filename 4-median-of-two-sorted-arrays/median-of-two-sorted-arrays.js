/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1; 
    let p2 = n -1;
    let p3 = m + n - 1;

    if (n === 0) return nums1;
    if(m === 0)
    {
        while(p2 >= 0){
        nums1[p3] = nums2[p2];
        p2--;
        p3--;
        }
        return nums2;

    }

    while ( p2 >= 0)
    {
        if(p1 >= 0 && nums1[p1] > nums2[p2])
        {
            nums1[p3] = nums1[p1];
            p3--;
            p1--;
        } else {
            nums1[p3] = nums2[p2];
            p3--;
            p2--;
        }
    }
    return nums1;
};

var findMedianSortedArrays = function(nums1, nums2) {
let ans = 0;
let mergeArr = merge(nums1, nums1.length, nums2, nums2.length);
if(mergeArr.length % 2 === 0)
{
    ans = (mergeArr[mergeArr.length/2] + mergeArr[mergeArr.length/2 - 1]) / 2;
} else {
    ans = mergeArr[Math.ceil(mergeArr.length/2) - 1];
}

return ans;
};