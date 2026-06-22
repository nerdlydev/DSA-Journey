/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
// Problem Statement: You are given an array of integers 'arr' and an integer i.e. a threshold value 'limit'. Your task is to find the smallest positive integer divisor, such that upon dividing all the elements of the given array by it, the sum of the division's result is less than or equal to the given threshold value.
/*
Example 1:
Input Format: N = 5, arr[] = {1,2,3,4,5}, limit = 8
Result: 3
Explanation: We can get a sum of 15(1 + 2 + 3 + 4 + 5) if we choose 1 as a divisor. 
The sum is 9(1 + 1 + 2 + 2 + 3)  if we choose 2 as a divisor. Upon dividing all the elements of the array by 3, we get 1,1,1,2,2 respectively. Now, their sum is equal to 7 <= 8 i.e. the threshold value. So, 3 is the minimum possible answer.

Example 2:
Input Format: N = 4, arr[] = {8,4,2,3}, limit = 10
Result: 2
Explanation: If we choose 1, we get 17 as the sum. If we choose 2, we get 9(4+2+1+2) <= 10 as the answer. So, 2 is the answer.
 */

 // Brute force alog 
 /*
We will run a loop from 1 to max element of the array to check all possible divisors.
To calculate the result, we will iterate over the given array using a loop. Within this loop, we will divide each element in the array by the current divisor, and sum up the obtained ceiling values.
Inside the outer loop, If result <= threshold: We will return d as our answer.
Finally, if we are outside the nested loops, we will return -1. */

//  const n = nums.length;

//         // Find the maximum value in the array
//         let maxVal = Math.max(...nums);

//         // Try all possible divisors from 1 to maxVal
//         for (let d = 1; d <= maxVal; d++) {
//             let total = 0;
//             for (let i = 0; i < n; i++) {
//                 // Divide each element by d and take ceiling
//                 total += Math.ceil(nums[i] / d);
//             }

//             // Check if total is within threshold
//             if (total <= threshold) {
//                 return d;
//             }

//         }

//         return -1; // No valid divisor found
// Time Complexity: O(max(arr[])*N), where max(arr[]) = maximum element in the array, N = size of the array. We are using nested loops. The outer loop runs from 1 to max(arr[]) and the inner loop runs for N times.
// Space Complexity: O(1). No extra space used

// Optimal approach using binary search 
/*Intuition
We are going to use the Binary Search algorithm to optimize the approach.

Approach
First, check if the number of elements is already greater than the allowed limit. If so, no answer is possible, so return -1.
Then, identify the largest number in the list.
Start with two markers , one at the smallest possible number (1), and another at the largest number in the list.
Use a loop to narrow down the range. In each step, find the number that is in the middle of the current range.
Check if using this middle number as a divisor results in a total that is within the allowed limit. This is done using a helper that adds up the rounded-up results of each division.
If the result is within the allowed limit, it means this number might work, but a smaller one could be better. So, look in the lower half of the current range.
If the result is too large, it means this number is too small. So, look in the upper half of the range instead.
Repeat this process until the range closes. The smallest number that works will be pointed to by the left marker, and that's the answer.
 */

 if (nums.length > threshold) return -1; // Not possible if number of elements > limit

    let low = 1;
    let high = Math.max(...nums); // Find the maximum value in the array

    // Binary search loop
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let sum = sumByD(nums, mid);

      if (sum <= threshold) {
        high = mid - 1; // Try smaller divisor
      } else {
        low = mid + 1;  // Try larger divisor
      }
    }

    return low; // The minimum valid divisor

};

// Helper method to compute the sum of ceil(arr[i] / div)
const sumByD = (nums, div) => {
    let sum = 0;
    for (let num of nums) {
      sum += Math.ceil(num / div);
    }
    return sum;
  };
  