const string = "The quick brown fox jumps over the lazy dog";

function count(string) {
  var count = [];
  string.split("").forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}

const z = count(string);

console.log(z);
