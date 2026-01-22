var lengthOfLongestSubstring = function(s) {
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    const set = new Set();

    for (let j = i; j < s.length; j++) {
      if (set.has(s[j])) break;

      set.add(s[j]);
      maxLen = Math.max(maxLen, j - i + 1);
    }
  }

  return maxLen;
};
