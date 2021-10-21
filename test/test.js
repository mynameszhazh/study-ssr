var removeDuplicates = function(nums) {
  const n = nums.length;
  if (n === 0) {
      return 0;
  }
  let fast = 1, slow = 1;
  while (fast < n) {
      if (nums[fast] !== nums[fast - 1]) {
          nums[slow] = nums[fast];
          ++slow;
      }
      ++fast;
  }
  return slow;
};


const arr = [0,0,1,1,1,2,2,3,3,4]
const len = removeDuplicates(arr)
console.log(len)
console.log(arr)

