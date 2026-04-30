/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
// Function to check if it's possible to make m bouquets on or before 'day'
    function isPossible(bloomDay, day, m, k) {
        let count = 0; // consecutive bloomed flowers
        let bouquets = 0; // number of bouquets made

        for (let bloom of bloomDay) {
            if (bloom <= day) {
                count++;
                if (count === k) {
                    bouquets++; // one bouquet is formed
                    count = 0;   // reset for next bouquet
                }
            } else {
                count = 0; // reset on break
            }
        }

        return bouquets >= m;
    }
var minDays = function(bloomDay, m, k) {

//The bruteforce Algorithm

// If the total number of flowers required to make all bouquets is more than the flowers available, it is not possible to make the bouquets. So, return -1.
// Loop through each day starting from the earliest bloom day to the latest bloom day to test all possible answers.
// For each day, check if it's possible to make the required number of bouquets using the flowers that have bloomed by that day. If yes, return that day as the answer.
// If no suitable day is found after checking all possibilities, it means it's impossible to make the bouquets. So, return -1.
// Time complaxity = O(N)

// const totalFlowers = m * k;
//     if (totalFlowers > bloomDay.length) return -1;

//     let min = Math.min(...bloomDay);
//     let max = Math.max(...bloomDay);

//     for (let day = min; day <= max; day++) {
//       if (isPossible(bloomDay, day, m, k)) {
//         return day;
//       }
//     }

//     return -1;

// optimal Algorithm
// If m*k > arr.size: This means we have insufficient flowers. So, it is impossible to make m bouquets and we will return -1.
// Next, we will find the maximum element i.e. max(arr[]), and the minimum element i.e. min(arr[]) in the array.
// Place the 2 pointers i.e. low and high: Initially, we will place the pointers. The pointer low will point to min(arr[]) and the high will point to max(arr[]).
// Calculate the ‘mid’: Now, inside the loop, we will calculate the value of ‘mid’ using the following formula: mid = (low+high) // 2 ( ‘//’ refers to integer division)
// Eliminate the halves based on the value returned by possible(): We will pass the potential answer, represented by the variable 'mid' (which corresponds to a specific day), to the 'possible()' function.
// If possible() returns true: On satisfying this condition, we can conclude that the number ‘mid’ is one of our possible answers. But we want the minimum number. So, we will eliminate the right half and consider the left half(i.e. high = mid-1).
// Otherwise, the value mid is smaller than the number we want. This means the numbers greater than ‘mid’ should be considered and the right half of ‘mid’ consists of such numbers. So, we will eliminate the left half and consider the right half(i.e. low = mid+1).
// Finally, outside the loop, we will return the value of low as the pointer will be pointing to the answer. 
// Time Complexity: O(1) O(log(max(arr[])-min(arr[])+1) * N), where {max(arr[]) -> maximum element of the array, min(arr[]) -> minimum element of the array, N = size of the array}

 if (m * k > bloomDay.length) return -1; // not enough flowers

        let minDay = Math.min(...bloomDay);
        let maxDay = Math.max(...bloomDay);
        let result = -1;

        // Binary search between minDay and maxDay
        while (minDay <= maxDay) {
            let mid = Math.floor((minDay + maxDay) / 2);
            if (isPossible(bloomDay, mid, m, k)) {
                result = mid;       // try smaller days
                maxDay = mid - 1;
            } else {
                minDay = mid + 1;   // need more days
            }
        }

        return result;
    };