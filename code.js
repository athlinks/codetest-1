var code = {
    // Returns "Hello World!"
    helloWorld: function() {
        return "Hello World!";
    },

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset, n) {
        const sentenceArray = sentence.split(" ");
        let startIndex = 0;

        //check bounds
        if (n <= 0 || n + offset > sentenceArray.length) return sentence;
        if (offset > 0) startIndex = offset + n - 1;

        for (let i = startIndex; i < sentenceArray.length; i += n) {
            sentenceArray[i] =
                sentenceArray[i].charAt(0).toUpperCase() +
                sentenceArray[i].substr(1);
        }

        return sentenceArray.join(" ");
    },

    // Determine if a number is prime
    isPrime: function(n) {
        if (n < 2) return false;
        if (n < 4) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;

        for (let i = 5; i * i <= n; i = i + 6) {
            if (n % i == 0 || n % (i + 2) == 0) {
                return false;
            }
        }

        return true;
    },

    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio.
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    goldenRatio: function(a, b) {
        const phi = (1 + Math.sqrt(5)) / 2;
        const ratio = b / a;

        if (ratio != phi) {
            return this.goldenRatio(b, a + b);
        }

        return ratio;
    },

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    fibonacci: function(n) {
        let computedValues = [];
        return calcNthfib(n);

        function calcNthfib(n) {
            let k = 0;

            if (n <= 0) return 0;
            if (n == 1 || n == 2) return 1;
            if (computedValues[n]) return computedValues[n];

            if (n % 2 == 0) {
                k = n / 2;
                computedValues[n] =
                    (2 * calcNthfib(k - 1) + calcNthfib(k)) * calcNthfib(k);
            } else {
                k = (n + 1) / 2;
                computedValues[n] =
                    calcNthfib(k) * calcNthfib(k) +
                    calcNthfib(k - 1) * calcNthfib(k - 1);
            }

            return computedValues[n];
        }
    },

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    squareRoot: function(n) {
        const precision = 0.000000000000001;
        let left = 0,
            mid = 0,
            right = n;

        if (n <= 1) return n;

        while (right - left > precision) {
            mid = (left + right) / 2;

            if (mid == n / mid) {
                break;
            } else if (mid * mid > n) {
                right = mid;
            } else {
                left = mid;
            }
        }

        return mid;
    }
};
module.exports = code;
