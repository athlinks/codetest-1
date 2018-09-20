var code = {
    // Returns "Hello World!"
    helloWorld: function() {
        return 'Hello World!';
    },

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset, n) {
        var sen = sentence.split(' ');

        // Error checking
        if(offset > sen.length || n <= 0 || offset < 0) {
            return sentence;
        }

        for(var i = offset; i < sen.length; i += n) {
            sen[i] = sen[i].charAt(0).toUpperCase() + sen[i].slice(1);
        }

        return sen.join(' ');
    },
    
    // Determine if a number is prime
    isPrime: function(n) {
        throw new Error("Not Implemented");
    },
    
    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio. 
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    goldenRatio: function(a, b) {
        throw new Error("Not Implemented");
    },

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    fibonacci: function(n) {
        throw new Error("Not Implemented");
    },

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    squareRoot: function(n) {
        throw new Error("Not Implemented");
    }
};
module.exports = code;
