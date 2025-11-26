/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
let L = 0;
let R = numbers.length - 1; // Start at the very end

while (L < R) { // Loop until pointers meet
    let sum = numbers[L] + numbers[R];

    if (sum === target) {
        return [L+1, R+1]; // Found it!
    } 
    else if (sum < target) {
        L++; // sum is too small? Increase the smaller number.
    } 
    else { 
        R--; // sum is too big? Decrease the larger number.
    }
}

return [L+1, R+1];
};