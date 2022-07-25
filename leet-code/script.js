// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?



var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([2, 7, 11, 15], 22))
// console.log(twoSum([2, 7, 11, 15], 26))
// console.log(twoSum([2, 7, 11, 15], 17))



const twoSum2 = function(nums, target) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        let value = nums[i];
        let complementPair = target - value;
        if(map[complementPair] !== undefined) {
            return [map[complementPair], i];
        } else {
            map[value] = i;
        }
    }
}


// console.log(twoSum2([2, 7, 11, 15], 9))
// console.log(twoSum2([2, 7, 11, 15], 22))
// console.log(twoSum2([2, 7, 11, 15], 26))
// console.log(twoSum2([2, 7, 11, 15], 17))



const twoSum3 = function(nums, target) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]] === undefined) {
            map[target-nums[i]] = i;
        } else {
            return [map[nums[i]], i]
        }
    }
}


// console.log(twoSum3([2, 7, 11, 15], 9))
// console.log(twoSum3([2, 7, 11, 15], 22))
// console.log(twoSum3([2, 7, 11, 15], 26))
// console.log(twoSum3([2, 7, 11, 15], 17))





// CONTAINS DUPLICATES


function duplicate(nums) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]] === undefined) {
            map[nums[i]] = 'haha'
        } else {
            return true;
        }
    }
    return false;
}

// console.log(duplicate([1, 2, 3, 4, 5, 6, 7, 8, 20, 21, 22, 23, 1]))





function duplicate2(nums) {
    nums.sort((a, b) => {return b-a});
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i-1] === nums[i]) return true
    }
    return false;
}


// console.log(duplicate2([1, 2, 3, 4, 5, 6, 7, 8, 20, 21, 22, 23]))





// Given a 2D grid map of "1's"(land) and "0's"(water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input: 
// 11110
// 11010
// 11000
// 00000

// Output: 1

// Example 2:
// Input: 
// 11000
// 11000
// 00100
// 00011

// Output: 3

const numIslands = (grid) => {
    let countIslands = 0;
    for (let rowIndex in grid) {
        for (let colIndex in grid[rowIndex]) {
            if (grid[rowIndex][colIndex] === '1') {
                countIslands++;

            }
        }
    }
    return countIslands;
};

const teraform = (rowIn, colIn, grid) => {
    if (grid[rowIn] === undefined || grid[rowIn][colIn] === undefined || grid[rowIn][colIn] === '0') return;
    grid[rowIn][colIn] = '0'

    teraform(rowIn+1, colIn, grid);
    teraform(rowIn-1, colIn, grid);
    teraform(rowIn, colIn+1, grid);
    teraform(rowIn, colIn-1, grid);
}
