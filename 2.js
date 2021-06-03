const string = "The quick brown fox jumps over the lazy dog";

// function count(string) {
//   var count = {};
//   string.split("").forEach(function (s) {
//     count[s] ? count[s]++ : (count[s] = 1);
//   });
//   return count;
// }

// const z = count(string);

const counter = (s) => [...s].reduce((a, c) => (a[c] = a[c] + 1 || 1) && a, {});

console.log(counter(string));
