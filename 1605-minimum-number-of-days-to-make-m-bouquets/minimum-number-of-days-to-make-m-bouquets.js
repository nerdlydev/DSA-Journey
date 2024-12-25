/**
 * @param {number[]} bloomDays
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDays, m, k) {
    let val = m * k;
    let n = bloomDays.length; // Size of the array
    if (val > n) return -1; // Impossible case
    // Find maximum and minimum
    let mini = Infinity, maxi = -Infinity;
    for (let i = 0; i < n; i++) {
        mini = Math.min(mini, bloomDays[i]);
        maxi = Math.max(maxi, bloomDays[i]);
    }
// Apply binary search
    let low = mini, high = maxi;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (possible(bloomDays, mid, m, k)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};

function possible(bloomDays, day, m, k) {
    let n = bloomDays.length; // Size of the array
    let cnt = 0;
    let noOfB = 0;
    // Count the number of bouquets
    for (let i = 0; i < n; i++) {
        if (bloomDays[i] <= day) {
            cnt++;
        } else {
            noOfB += Math.floor(cnt / k);
            cnt = 0;
        }
    }
    noOfB += Math.floor(cnt / k);
    return noOfB >= m;
}
