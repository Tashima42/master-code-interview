function recurringItem(nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === true) return nums[i];
    else map[nums[i]] = true;
  }
}

const nums1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const nums2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const nums3 = [2, 3, 4, 5];

console.log(recurringItem(nums1));
console.log(recurringItem(nums2));
console.log(recurringItem(nums3));
