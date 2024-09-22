// number sort does not work

let nums = [9, 10]; // [9,10]

let numsAsc = nums.sort((a, b) => {
  return a - b;
});
console.log(numsAsc);

let nums1 = [1, 2, 3, 4, 5];

let nums1Des = nums1.sort((a, b) => {
  return b - a;
});

console.log(nums1Des);
