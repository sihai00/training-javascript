/**
 * 给定一个字符串，按照字母出现频率的倒叙重组整个字符串
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  var obj = {}

  for (var i = 0; i < s.length; i++) {
    obj[s[i]] = ~~obj[s[i]] + 1
  }

  var arr = []
  Object.keys(obj).forEach(v => {
    arr.push({
      item: v,
      count: obj[v]
    })
  })

  var ans = ''
  arr.sort((a, b) => b.count - a.count).forEach(v => {
    for (var i = 0; i < v.count; i++) {
      ans += v.item
    }
  })

  return ans
};

// more fast by other
var frequencySort = function(s) {
  const freq = {};
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in freq)) {
      freq[s[i]] = {
        count: 0,
        char: s[i],
      };
    }
    freq[s[i]].count++;
  }

  return Object.keys(freq)
    .map((key) => freq[key])
    .sort((a, b) => b.count - a.count)
    .map(({count, char}) => char.repeat(count))
    .reduce((a, b) => a + b, '');
};