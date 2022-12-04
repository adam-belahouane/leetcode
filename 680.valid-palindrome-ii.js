/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 *
 * https://leetcode.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (39.33%)
 * Likes:    6598
 * Dislikes: 338
 * Total Accepted:    560.8K
 * Total Submissions: 1.4M
 * Testcase Example:  '"aba"'
 *
 * Given a string s, return true if the s can be palindrome after deleting at
 * most one character from it.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "aba"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "abca"
 * Output: true
 * Explanation: You could delete the character 'c'.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "abc"
 * Output: false
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= s.length <= 10^5
 * s consists of lowercase English letters.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let sArray = s.split('')
    let l = 0
    let r = sArray.length - 1
    
    while(l < r){
        if(sArray[l] != sArray[r]){
            let LSub = sArray.slice(l,r)
            let RSub = sArray.slice(l+1, r+1)
            return (isPalindrome(LSub, 0, LSub.length -1) || isPalindrome(RSub,  0, RSub.length -1))
        }
        
        l++
        r--
    }
    
    return true
};

function isPalindrome(str, low, high) {
    while (low < high) {
        if (str[low] !== str[high]) return false;
        low++, high--;
    }
    return true;
}
// @lc code=end

