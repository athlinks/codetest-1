var code = {
      // Returns "Hello World!"
      helloWorld: function () {
        return "Hello World!";
      },

      // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
      capitalizeEveryNthWord: function (sentence, offset, n) {
        let wordHolder = sentence.split(" ");
        for (let i = 0; i < wordHolder.length; i++) {
          if (i >= offset && i%n === 0) {
            wordHolder[i] = wordHolder[i].charAt(0).toUpperCase() + wordHolder[i].substr(1, wordHolder[i].length - 1);
          }
        }
        return wordHolder.join(" ").toString();
      },

      // Determine if a number is prime
      isPrime:
          function (n) {
            for (let i = 2; i < n; i++) {
              if (n % i === 0) {
                return false;
              }
            }
            return n > 1;
          }

      ,

      // Calculate the golden ratio.
      // Given two numbers a and b with a > b > 0, the ratio is b / a.
      // Let c = a + b, then the ratio c / b is closer to the golden ratio.
      // Let d = b + c, then the ratio d / c is closer to the golden ratio.
      // Let e = c + d, then the ratio e / d is closer to the golden ratio.
      // If you continue this process, the result will trend towards the golden ratio.
      goldenRatio: function (a, b) {
        let width = a + b;
        if (!width) {
          return {};
        }

        return {
          width: width,
          right: Math.round(width / 1.61803),
          total: Math.round(width * 1.61803),
          left: width - Math.round(width / 1.61803)
        };
      }
      ,

      // Give the nth Fibonacci number
      // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
      fibonacci: function (n) {
        if (n === 0) {
          return 0;
        }
        if (n === 1 || n === 2) {
          return 1;
        }

        let prev_1 = 1, prev_2 = 1, current;
        for (let i = 3; i <= n; i++) {
          current = prev_1 + prev_2;
          prev_1 = prev_2;
          prev_2 = current;
        }
        return current;
      }
      ,

      // Give the square root of a number
      // Using a binary search algorithm, search for the square root of a given number.
      // Do not use the built-in square root function.
      squareRoot: function (n) {
        let lastGuess, guess = n / 3;
        do {
          lastGuess = guess;
          guess = (n / guess + guess) / 2;
        } while (Math.abs(lastGuess - guess) > 5e-15);
        return guess;
      }
    }
;
module.exports = code;
