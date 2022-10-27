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

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([2, 7, 11, 15], 22))
// console.log(twoSum([2, 7, 11, 15], 26))
// console.log(twoSum([2, 7, 11, 15], 17))

const twoSum2 = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let complementPair = target - value;
    if (map[complementPair] !== undefined) {
      return [map[complementPair], i];
    } else {
      map[value] = i;
    }
  }
};

// console.log(twoSum2([2, 7, 11, 15], 9))
// console.log(twoSum2([2, 7, 11, 15], 22))
// console.log(twoSum2([2, 7, 11, 15], 26))
// console.log(twoSum2([2, 7, 11, 15], 17))

const twoSum3 = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[target - nums[i]] = i;
    } else {
      return [map[nums[i]], i];
    }
  }
};

// console.log(twoSum3([2, 7, 11, 15], 9))
// console.log(twoSum3([2, 7, 11, 15], 22))
// console.log(twoSum3([2, 7, 11, 15], 26))
// console.log(twoSum3([2, 7, 11, 15], 17))

// CONTAINS DUPLICATES

function duplicate(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = "haha";
    } else {
      return true;
    }
  }
  return false;
}

// console.log(duplicate([1, 2, 3, 4, 5, 6, 7, 8, 20, 21, 22, 23, 1]))

function duplicate2(nums) {
  nums.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) return true;
  }
  return false;
}

// console.log(duplicate2([1, 2, 3, 4, 5, 6, 7, 8, 20, 21, 22, 23]))

const palindrome = (str) => {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
};

// console.log(palindrome("A man, a plan, a canal. Panama"));
// console.log(palindrome("toot"));
// console.log(palindrome("hey now"));

const palindrome2 = (str) => {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, "");
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

// console.log(palindrome2("A man, a plan, a canal. Panama"));
// console.log(palindrome2("toot"));
// console.log(palindrome2("hey now"));

const romanToInt = (s) => {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let res = 0;
  s.split("").forEach((num, i) => {
    if (map[num] < map[s[i + 1]]) {
      res -= map[num];
    } else {
      res += map[num];
    }
  });
  return res;
};

// console.log(romanToInt("III"));
// console.log(romanToInt("IV"));
// console.log(romanToInt("IX"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));

const romanToInt2 = (s) => {
  const key = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let ans = [];

  for (let i = 0; i < s.length; i++) {
    if (key[s[i]] < key[s[i + 1]]) {
      ans.push(key[s[i + 1]] - key[s[i]]);
      i++;
      continue;
    } else {
      ans.push(key[s[i]]);
    }
  }
  return ans.reduce((total, curr) => total + curr, 0);
};

// console.log(romanToInt2("I"));
// console.log(romanToInt2("III"));
// console.log(romanToInt2("IV"));
// console.log(romanToInt2("IX"));
// console.log(romanToInt2("LVIII"));
// console.log(romanToInt2("MCMXCIV"));

const intToRoman = (num) => {
  let romanToNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = "";

  for (let key in romanToNum) {
    while (num >= romanToNum[key]) {
      roman = roman + key;
      num = num - romanToNum[key];
    }
  }
  return roman;
};

// console.log(intToRoman(30));

const longestCommonPrefix = (arr) => {
  let prefix = "";
  if (arr.length === 0) return prefix;

  for (let i = 0; i < arr[0].length; i++) {
    const character = arr[0][i];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] !== character) return prefix;
    }
    prefix = prefix + character;
  }
  return prefix;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["play", "place", "plane", "plr"]));

const longestCommonPrefix2 = (arr) => {
  arr = arr.sort((a, b) => b.length - a.length);
  console.log(arr)
  let minStr = arr[0] || "";
  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(minStr) !== 0) {
      minStr = minStr.substring(0, minStr.length - 1);
    }
    return minStr;
  }
};

console.log(longestCommonPrefix2(["play", "place", "plane"]));
console.log(longestCommonPrefix2(["flower", "flow", "flight"]));
console.log(longestCommonPrefix2(["dog", "racecar", "car"]));

const validParentheses = (s) => {
  const hashMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];

  for (let ch of s) {
    if (hashMap[ch]) {
      stack.push(hashMap[ch]);
    } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

// console.log(validParentheses("[][]([])"))
// console.log(validParentheses("[({})]"))
// console.log(validParentheses("[](){[}]"))

const removeDuplicates = (nums) => {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[counter] = nums[i];
      counter++;
    }
  }
  let result2 = nums.splice(0, counter);
  return result2.length;
};

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

const removeDuplicates2 = (nums) => {
  return [...new Set(nums)].length;
};

// console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
// console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 3, 4, 5, 6, 6, 21, 6, 7, 2, 1]))
// console.log(removeDuplicates2([0, 0, 1, 2, 3, 3, 4, 4, 4, 4, 4, 5, 6, 7, 7, 7, 102, 112, 1345]))

const findDuplicates = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let value = Math.abs(nums[i]);
    let index = value - 1;
    // console.log(nums[index]);
    if (nums[index] < 0) {
      result.push(value);
    } else {
      nums[index] *= -1;
    }
  }
  return result;
};

// console.log(findDuplicates([4, 3, 2, 2, 3, 1]));

const findDuplicates2 = (nums) => {
  return nums.filter((item, index) => nums.indexOf(item) !== index);
};

// console.log(findDuplicates2([4, 3, 2, 2, 3, 1]));
