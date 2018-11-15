var code = {
    // Returns "Hello World!"
    helloWorld: function() {
        return 'Hello World!'
    },

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset, n) {
       // my method here was to first get an array of the words, an map them to a new array based on the criteria in the 
       // Array.prototype.map() callback function, joining the results back to a sentence afterwards
       return sentence.split(' ').map((w, i) => i % n == 0 && i >= offset ? w.charAt(0).toUpperCase() + w.slice(1) : w).join(' ');
    },
    
    // Determine if a number is prime
    // Commented out but you could reduce this complexity from o(n) to o(sqrt(n)) if you loop the sqr of n
    // isPrime = n => {
    //     for (let i = 2, s = Math.sqrt(num); i <=s; i++) {
    //         if (n % i === 0) return false;
    //     }
    //     return n !==1 && n !==0 && n !==-1;
    // },
    
    isPrime: function(n) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) return false;
        }
        return n !==1 && n !==0 && n !==-1;
    },


    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio. 
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.

    // I did not complete this one, quite the challenege! I will keep thinking on it this week until i solve it!
    // my attempt is below
    // -Ryan 
    goldenRatio: function(a, b) {
        if (Math.abs((b / a) - ((a + b) / a))) {
            return ((a + b ) / b);
        } 
    },

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    fibonacci: function(n) {
        let arr = [0, 1];
        for (let i = 2; i < n + 1; i++) {
            arr.push(arr[i - 2] + arr[i - 1]);
        }
        return arr[n];
    },

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    squareRoot: function(n) {
        for (let i = 0; i * i <= n; i++) {
            if (i * i === n) {
                return i;
            }
        }
    }
};
module.exports = code;
