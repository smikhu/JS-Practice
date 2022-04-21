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





// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104


 function maxProfit(prices) {
     
 }