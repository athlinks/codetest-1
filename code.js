var code = {
    // Returns "Hello World!"
    helloWorld: function() {
        // throw new Error("Not Implemented");
        return 'Hello World!';
    },

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset, n) {
        // throw new Error("Not Implemented");
        var sentenceArray = sentence.split(' ');
        for (var i = offset; i < sentenceArray.length; i += n) {
            sentenceArray[i] = sentenceArray[i].charAt(0).toUpperCase() + sentenceArray[i].slice(1);
        }
        return sentenceArray.join(' ');
    },
    
    // Determine if a number is prime
    isPrime: function(n) {
        // throw new Error("Not Implemented");
        if (n <= 1) {
            return false;
        }
        else if (n <= 3) {
            return true;
        }

        var squareRoot = Math.sqrt(n);
        for (var i = 2; i <= squareRoot; i++) {
            if (n % i == 0) {
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
        // throw new Error("Not Implemented");
        var goldenRatio = (1.61803399).toFixed(4);
        if (a > 0 && b > 0)
        {
            var testingRatio = b / a;
            if (testingRatio < goldenRatio || goldenRatio < testingRatio) {
                var c = a + b;
                return code.goldenRatio(b, c);
            }
            return testingRatio;
        }
    },

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    fibonacci: function(n) {
        // throw new Error("Not Implemented");
        if (n <= 1) return n;
        return code.fibonacci(n - 1) + code.fibonacci(n - 2);
    },

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    squareRoot: function(n) {
        // throw new Error("Not Implemented");
        var lowRange = 1;
        var highRange = n;

        while (lowRange <= highRange) {
            var squareRoot = lowRange + (highRange - lowRange) / 2;
            var square = squareRoot * squareRoot;

            if (Math.abs(square - n) < 0.001) {
                return parseFloat(squareRoot.toFixed(3));
            }
            else if(square < n) {
                lowRange = squareRoot;
            }
            else {
                highRange = squareRoot;
            }
        }
    }
};
module.exports = code;
