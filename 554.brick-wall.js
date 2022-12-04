/*
 * @lc app=leetcode id=554 lang=javascript
 *
 * [554] Brick Wall
 *
 * https://leetcode.com/problems/brick-wall/description/
 *
 * algorithms
 * Medium (53.21%)
 * Likes:    2021
 * Dislikes: 112
 * Total Accepted:    109.7K
 * Total Submissions: 206.1K
 * Testcase Example:  '[[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]'
 *
 * There is a rectangular brick wall in front of you with n rows of bricks. The
 * i^th row has some number of bricks each of the same height (i.e., one unit)
 * but they can be of different widths. The total width of each row is the
 * same.
 * 
 * Draw a vertical line from the top to the bottom and cross the least bricks.
 * If your line goes through the edge of a brick, then the brick is not
 * considered as crossed. You cannot draw a line just along one of the two
 * vertical edges of the wall, in which case the line will obviously cross no
 * bricks.
 * 
 * Given the 2D array wall that contains the information about the wall, return
 * the minimum number of crossed bricks after drawing such a vertical line.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: wall = [[1],[1],[1]]
 * Output: 3
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * n == wall.length
 * 1 <= n <= 10^4
 * 1 <= wall[i].length <= 10^4
 * 1 <= sum(wall[i].length) <= 2 * 10^4
 * sum(wall[i]) is the same for each row i.
 * 1 <= wall[i][j] <= 2^31 - 1
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    const gapMap = {}
    const array = []
    for(let i = 0; i < wall.length; i++){
        let width = 0
        for(let j = 0 ; j < wall[i].length - 1; j++){
            width = width + wall[i][j]
            let gapPostion = width
        if(gapMap[gapPostion] == undefined){
            gapMap[gapPostion] = 1
            array.push(gapPostion)
        }else{
            gapMap[gapPostion] = gapMap[gapPostion] + 1
        }
        }
        
    }
    
    let mostGaps = 0
    for(let i = 0; i < array.length; i++){
        if(gapMap[array[i]] > mostGaps){
           mostGaps = gapMap[array[i]]
        }
    }
    return wall.length - mostGaps
};
// @lc code=end

