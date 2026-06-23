/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  // Brute Force Approach
  /* 
  The problem asks to find the minimum capacity of the ship such that all packages can be shipped within d days. A brute force way is to check every capacity starting from the maximum single package weight (since capacity can't be less than the heaviest package) up to the sum of all package weights (which guarantees all packages shipped in one day). For each capacity, simulate the shipping process day by day. The smallest capacity that ships all packages in ≤ d days is the answer.
Find the maximum weight in the array (minimum capacity possible).
Calculate the sum of all weights (maximum capacity possible).
For each capacity from max weight to sum:
Simulate shipping: load packages one by one until capacity is reached, then move to next day.
If total days used is ≤ d, return that capacity.
   */  
  // Find maximum weight as minimum capacity
//         let l = Math.max(...weights);
//         // Find total sum as maximum capacity
//         let r = weights.reduce((a, b) => a + b, 0);

//    // Iterate from minimum to maximum capacity
//         for (let capacity = l; capacity <= r; capacity++) {
//             // Calculate days needed for current capacity
//             let needed = daysNeeded(weights, capacity);
//             // If days needed are less than or equal to d, return capacity
//             if (needed <= days) {
//                 return capacity;
//             }
//         }
//         // Should never reach here given constraints
//         return r;

    /*
Optimal Approach Algorithm
We want to find the minimum ship capacity that allows shipping all packages within the given number of days. The capacity must be at least the heaviest package because you can’t split a package. At the same time, the capacity can be at most the sum of all packages (if you ship everything in one day). So the answer lies between these two extremes. Using binary search on this range lets us efficiently find the smallest capacity that works. For each candidate capacity, we check if it’s possible to ship all packages within the given days by greedily accumulating package weights until we reach capacity, then moving to the next day.
Set the lower bound as the maximum weight in the packages.
Set the upper bound as the sum of all package weights.
While the lower bound is less than or equal to the upper bound, do:
Pick the middle value between lower and upper bounds as the candidate capacity.
Simulate shipping with this capacity: accumulate package weights until capacity is reached, then count a day and reset accumulation.
If the number of days used is within the allowed days, move the upper bound down to try smaller capacities.
If the number of days exceeds the allowed days, increase the lower bound to try larger capacities.
Return the lower bound when the search finishes as the minimum capacity needed.
     */

    let low = Math.max(...weights);
    let high = weights.reduce((a, b) => a + b, 0);

         // Binary search between left and right capacity values
        while (low < high) {
            // Calculate mid value to test
            let mid = Math.floor(low + (high - low) / 2);
            // Calculate how many days needed for capacity mid
            let needed = daysNeeded(weights, mid);

            // If days needed is less or equal to allowed days,
            // try to find smaller capacity on left side
            if (needed <= days) {
                high = mid;
            } else {
                // Else, need more capacity, search on right side
                low = mid + 1;
            }
        }
        // Return minimum capacity found
        return low;
};

 // Function to check how many days needed for given capacity
   function daysNeeded(weights, capacity) {
        // Initialize day count to 1
        let days = 1;
        // Current load for the day
        let currentLoad = 0;

        // Iterate over all package weights
        for (let w of weights) {
            // If adding weight exceeds capacity
            if (currentLoad + w > capacity) {
                // Increase day count and reset load
                days++;
                currentLoad = w;
            } else {
                // Otherwise, add weight to current load
                currentLoad += w;
            }
        }
        // Return total days needed
        return days;
    }


