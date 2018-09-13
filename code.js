var code = {
    // Returns "Hello World!"
    helloWorld: function() {
        return "Hello World!"
    },

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset, n) {
     
      function capitalize (input) {
         return (!!input) ? input.charAt(0).toUpperCase() + input.substring(1, input.length): '';
      }
      
      words = sentence.split(' ');
      for (let i = offset; i < words.length; i++){
         if (!((i - offset) % n)) words[i] = capitalize(words[i]);
      }
      return words.join(' ');
      
    },
    
    // Determine if a number is prime
    isPrime: function(n) {
      if (n < 0)
        return false;
      if (n == 0) 
        return false;
      if (n == 1)
        return false;
      if (n == 2) {
			// The first two primes
			return true;
		} else if (!(n % 2)) {
			// Even numbers
			return false;
		} else {
			for (let i = 2; i < n; i++) {
				// n is divisible by i
				if (!(n % i))
					return false;
			}
		}
		//console.log("Found prime!");
		return true;
    },
    
    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio. 
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    goldenRatio: function(a, b) {
      let i = 0,
		sum = 0,
		ratio = 0;
		for (; i < 1000; i++) {
			sum = a + b;
			ratio = sum / b;
			a = b;
			b = sum;
		}
		return ratio;
    },

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    fibonacci: function(n) {
		curr = 1,
		prev = 1,
		newCurr = 0;
      if (n < 1)
         return 0;
		if (n == 1) {
         return 1;
		} else if (n == 2) {
         return 1;
		} else {
			line = "0,1";
			for (let i = 2; i < n; i++) {
				newCurr = curr + prev;
				prev = curr;
				curr = newCurr;
			}
		}
		return newCurr;
    },

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    squareRoot: function(n) {
      let half = n / 2,
		curr = n / 2;
		if (n < 0) {
			return undefined;
		} else if (n == 0) {
			return 0;
		} else if (n > 0 && n < 1) {
			half = n / 2;
         (n < 0.5)? (curr = n + 0.25): (curr = n);
		} else if (n == 1) {
			return 1;
		} else {
			half = n / 2,
			curr = n / 2;
		}
		for (let i = 0; i < 1000; i++) {
			half = half / 2;
			if (curr * curr > n) 
				curr = curr - half;
			else 
				curr = curr + half;
		}
		return curr;
    }
};
module.exports = code;
