// 1 Largest Palindrome Product
// A palindromic number reads the same both ways. Find the largest palindrome number made  from the product of three 3-digit palindrome numbers.

function largestPalindrome() {
  var max = 0;

  // not using i >= 100 since 100*100 is not palindrome! :)
  for (var i = 999; i > 100; i--) {
    // because i * j === j * i, no need of both i and j
    // to count down from 999
    for (var j = i; j > 100; j--) {
      var mul = j * i;
      if (isPalin(mul) && mul > max) {
        max = i * j;
      }
    }
  }

  return max;
}

function isPalin(i) {
  // adding empty string to i instead using of .toString
  // avoids unnecessary wrapping in String object on the left side
  i = "" + i;

  // don't rely on ==,  use === instead
  return i === i.split("").reverse().join("");
}

console.log(largestPalindrome());
