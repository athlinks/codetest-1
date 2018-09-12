var code = {
    // Returns "Hello World!"
    helloWorld: function() {
        return "Hello World!";
    },

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset=0, n) {
        // explode the sentence by spaces
        let sep = " ";
        let words = sentence.split(sep);
        // be immutable
        let updatedWords = [];
        for (let i = 0; i < words.length; i++) {
            if (i >= offset && i % n === 0) {
          	    updatedWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
            } else {
                updatedWords.push(words[i]);
            }
        }

        return updatedWords.join(sep);
    },

    // Determine if a number is prime
    isPrime: function(n) {
        // optimus prime! ... regex style
        return n>0 && !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/));
        // I can't take credit for this though. I read this article and thought it was really neat...
        // https://www.noulakaz.net/2007/03/18/a-regular-expression-to-check-for-prime-numbers/
    },

    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio.
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    goldenRatio: function(a, b) {
        fibNums = this.fibonacci(b);

        return fibNums[fibNums.length - 1] / fibNums[fibNums.length - 2];
    },

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    fibonacci: function(n) {
        if (n === 0) {
            return 0;
        }

        // start your engines..
        let fibNums = [0,1];
        for (let i = 1; i < n; i++) {
            // add previous element and current element together
            fibNums.push(fibNums[i-1] + fibNums[i]);
        }

        return fibNums.pop();
    },

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    squareRoot: function(n) {
        if (n < 0) {
            return -1; // imaginary
        }
        if (n === 0 || n === 1) {
            return n;
        }

        // initialize the bounds
        let high = n;
        let low = 1;

        while (high > low) {
            mid = (high + low) / 2;
            low = n / mid;
            high = mid; // "mid" is used for sake of code comprehension
        }

        return high; // the new high is our result
    }
};
module.exports = code;
