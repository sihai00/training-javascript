/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  var anagrams = [];
  var hash = [];

  hash.length = 256;

  [...p].forEach(c => hash[c.charCodeAt(0)] = (hash[c.charCodeAt(0)] || 0) + 1)

  var begin = 0, end = 0, count = p.length

  while (end < s.length) {
    let key = s.charCodeAt(end);

    if (hash[key] > 0){
      count--;
    }

    hash[key]--;
    end++;

    if (count == 0){
      anagrams.push(begin);
    }

    if (end - begin == p.length) {
      key = s.charCodeAt(begin);

      if (hash[key] >= 0){
        count++;
      }

      hash[key]++;
      begin++;
    }
  }

 return anagrams;
};
