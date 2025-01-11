class Solution {
public:
    void rotate(vector<int>& nums, int k) {
// The Brute Force 
        // int n = nums.size();
        // if(n == 0) return;
        // k = k % n;
        // if (k > n)
        //     return;
        // int temp[k]; // required temp array of size k 
        // // we start shifting from kth index
        // for(int i = k; i < n; i++){
        //     nums[i - k] = nums[i];
        // }

        // // puting back temp array

        // for (int i = n - k; i < n; i++){
        //     nums[i] = temp[i - (n - k)];
        // }

        // Optimal solution : 

        k %= nums.size();
        reverse(nums.begin(), nums.end());
        reverse(nums.begin(), nums.begin() + k);
        reverse(nums.begin() + k, nums.end());
    }
        

};