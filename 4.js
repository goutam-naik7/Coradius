// 4 Magical Numbers
// A number ABC is magical if ABC, BCA, CAB are primes. How many 3-digit magical numbers are  there below 1000?
// Example: 197(ABC), 971(BCA), 719(CAB)

function magicalNumber() {
  var count = 0;

  for (var i = 999; i > 100; i--) {
    if ((i - 1) % 9 == 0) count++;
  }

  return count;
}

console.log(magicalNumber());
