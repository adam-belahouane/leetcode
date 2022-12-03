/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 *
 * https://leetcode.com/problems/sort-colors/description/
 *
 * algorithms
 * Medium (57.46%)
 * Likes:    13149
 * Dislikes: 480
 * Total Accepted:    1.3M
 * Total Submissions: 2.2M
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * Given an array nums with n objects colored red, white, or blue, sort them
 * in-place so that objects of the same color are adjacent, with the colors in
 * the order red, white, and blue.
 *
 * We will use the integers 0, 1, and 2 to represent the color red, white, and
 * blue, respectively.
 *
 * You must solve this problem without using the library's sort function.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [2,0,1]
 * Output: [0,1,2]
 *
 *
 *
 * Constraints:
 *
 *
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] is either 0, 1, or 2.
 *
 *
 *
 * Follow up: Could you come up with a one-pass algorithm using only constant
 * extra space?
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const map = {};
  map[0] = 0;
  map[1] = 0;
  map[2] = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      map[nums[i]] = map[nums[i]] + 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i < map[0] + map[1]) {
      nums[i] = 1;
    } else {
      nums[i] = 2;
    }
    if (i < map[0]) nums[i] = 0;
  }
};
// @lc code=end
