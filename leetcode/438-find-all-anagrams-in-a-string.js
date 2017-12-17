/**
 * 寻找所有p在s中子元素的下标
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
function findAnagrams(s, p) {
  const map = {}, res = [];
  for (const val of p) {
    map[val] ? map[val]++ : map[val] = 1;
  }
  let count = p.length;
  for (let l = 0, r = 0; r < s.length; ) {
    if (map[s[r++]]-- >= 1) {
      count--;
    }
    if (count === 0) {
      res.push(l);
    }
    if (r - l === p.length && map[s[l++]]++ >= 0) {
      count++;
    }
  }
  return res;
};

