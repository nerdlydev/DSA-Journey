/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    // If we have already seen "need", we found the pair
    if (map.has(need)) {
      return [map.get(need), i];
    }

    // Store current value with its index for future checks
    map.set(nums[i], i);
  }

  return [];
};