var code = {
    // Returns "Hello World!"
    helloWorld: function() {
        return "Hello World!"
    },

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset, n) {
        const words = sentence.split(" ")
        for (let i = offset; i < words.length; i++) {
            if (i % n === 0) {
                const chars = words[i].split("");
                chars[0] = chars[0].toUpperCase();
                words[i] = chars.join("");
            }
        }
        return words.join(" ")
    },
    
    // Determine if a number is prime
    isPrime: function(n) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return n > 1;
    },
    
    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio. 
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    goldenRatio: function(a, b) {
        do {
            var ratio = (a + b) / b;
            a = b;
            b = (a + b);
        } while (1.61800 > ratio && ratio < 1.61806)
    },

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    fibonacci: function(n) {
        let fib = [];

        fib[0] = 0;
        fib[1] = 1;

        for (let i = 2; i <= n; i+=1) {
            fib[i] = fib[i-2] + fib[i-1];
        }
        
        return fib[n]
    },

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    squareRoot: function(n) {
        let ceil = n;
        let floor = 0; 
    
        let root = (ceil - floor) / 2;
        let squared = root * root;
    
        while (Math.abs(squared - n) > 0.00000000000001) {
            
            if (squared > n) {
                ceil = root;
                root -= (ceil - floor) / 2;
            } else {
                floor = root;
                root += (ceil - floor) / 2;
    
            }
    
            squared = root * root;
    
        }
        return root;
    }
};
module.exports = code;
