function multiplesSum(multiples, limit){
  var sum = 0;
  for (var i = 0; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0){
      sum += i;
    }
  }
  console.log(sum);
}


function fibonacciEvenSum(limit){
  var sum = 0;
  var first = 1;
  var second = 1;
  while (true) {
    var next = first + second;
    if (next > limit){
      break;
    }
    first = second;
    second = next;
    if(next % 2 === 0){
      sum += next;
    }
  }
  console.log(sum);
}

function isPrime(number){
  var limit = Math.sqrt(number)
  for (var i = 2; i < limit; i++) {
    if(number % i === 0){
      return false;
    }
  }
  return true;
}

function largestPrimeFactor(number) {
  var lastFactor = Math.floor(number / 2);
  while (lastFactor > 0) {
    if (number % lastFactor === 0){
      // check if the  Math.floor is prime
      if(isPrime(lastFactor)){
        return lastFactor;
      }
    }
    lastFactor -= 1;
  }
  return lastFactor;
}

function smallestMultiple(){
  var n = 1;
  while(true){
    var good = true;
    for (var i = 1; i < 21; i++) {
      if(n % i !== 0){
        good = false;
        break;
      }
    }
    if(good && n % 2 == 0){
      console.log(n);
    }
    n++;
  }
}

// multiplesSum([3, 5], 1000)
// fibonacciEvenSum(4000000);
// console.log(largestPrimeFactor(600851475143));
smallestMultiple()
