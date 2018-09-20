var code = {
    // Returns "Hello World!"
    helloWorld: function() {
        return 'Hello World!';
    },

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset, n) {
        var sen = sentence.split(' ');

        if(offset < 0) {
            offset += sen.length;
        }

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
        // We only need to check upto the sqroot of a number to determine primality
        var maxCheck = Math.floor(Math.sqrt(n)) + 1;
        var isPrime = true;

        // numbers less than or eqaul to 1, and even numbers [except 2] are not prime 
        if(n <= 1 || (n % 2 === 0 && n !== 2)) {
            isPrime = false;
        }

        // we only need to check odd numbers
        for(var i = 3; i <= maxCheck; i += 2) {
            if(n % i === 0) {
                isPrime = false;
                break;
            }
        }

        return isPrime;
    },
    
    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio. 
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    goldenRatio: function(a, b) {
        var precision = 5;
        var error = '.00005';
        
        var tempX = a;
        var tempY = b;
        var tempZ = a + b;
        var ratio = 0;
        var oldRatio = -1;

        while(true) {
            tempX = tempY;
            tempY = tempZ;
            tempZ = tempX + tempY;
            ratio = (tempZ / tempY).toFixed(precision);

            if(Math.abs(ratio - oldRatio) < error) {
                break;
            } else {
                oldRatio = ratio;
            }
        }
        return ratio;
    },

    fibCache: {},

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    fibonacci: function(n) {
        // Binet's Formula
        /*
        var sqrt5 = Math.sqrt(5);

        var Phi = (1 + sqrt5) / 2;
        var phi = (1 - sqrt5) / 2;

        var fib = Math.round((Math.pow(Phi, n) - Math.pow(phi, n)) / sqrt5)

        return fib;
        */

        // Memoize version

        if(n < 1) {
            return 0;
        }

        if(n <= 2) {
            return 1;
        }

        if(n in this.fibCache) {
            return this.fibCache[n];
        }

        var val = this.fibonacci(n - 1) + this.fibonacci(n - 2);

        this.fibCache[n] = val;

        return val;
    },

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    squareRoot: function(n) {
        var start = 0;
        var end = n;
        var mid = 0;
        var mid2 = 0;
        var res = 0;
        var inc = 0.1;

        while(start <= end) {
            mid = Math.floor((start + end) / 2);
            mid2 = mid * mid;

            if(mid2 === n) {
                res = mid;
                break;
            }

            if(mid2 < n) {
                start = mid + 1;
                res = mid;
            } else {
                end = mid - 1;
            }
            
        }

        // calculate the decimal to 5 points of precision
        for(i = 0; i < 5; i++) {
            while(res * res <= n) {
                res += inc;
            }
            res = res - inc;
            inc  = inc / 10;
        }

        return parseFloat(res.toFixed(5));

    }
};
module.exports = code;
