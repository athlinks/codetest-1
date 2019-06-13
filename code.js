var code = {
    // Returns "Hello World!"
    helloWorld: function() {
        return "Hello World!";
    },

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset, n) {
        var words = sentence.split(" ");
        // Cap words 
        while (offset < words.length) {
            words[offset] = words[offset].substr(0,1).toUpperCase() + 
                words[offset].substr(1);
            offset += n;
        }
        // Rebuild the sentence
        var result = words[0]; 
        for (var i = 1; i < words.length; i++) {
            result += " " + words[i];
        }
        return result;
    },
    
    // Determine if a number is prime
    isPrime: function(n) {
        // 1 and 0 
        if (Math.abs(n) <= 1) {
            return false;
        }
        // No evens > 2 
        if (n % 2 == 0 && Math.abs(n) != 2) {
            return false; 
        }

        // Loop over odd numbers 
        for (var i = 3; i < Math.abs(n/2); i+=2) {
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
        var num = a + b;
        var denom = b;
        var ratio = num / denom;

        if (Math.abs(b/a - ratio) > 0.0001) {
            return arguments.callee(denom, num);            
        }

        return ratio;
    },

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    fibonacci: function(n) {
        if (n <= 1) {
            return n;
        }     
           
        var sum = 1;
        var prevSum = 0;
        for (var i = 2; i <= n; i++) {
            var temp = sum;
            sum += prevSum;  
            prevSum = temp;         
        }
        return sum;
    },

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    squareRoot: function(n) {
        // Imaginary 
        if (n < 0) {
            throw new Error("Input must be positive to calculate root.");
        }
        var x = n / 2;
        var err = x*x - n;
        while (Math.abs(err) > 0.0001) {
            if (err > 0) {
                if ((x/2) ^ 2 >= n) {
                    // Zone in by half
                    x = x / 2;
                } else {
                    // Small increment 
                    x -= 0.0001;                    
                }
            } else {
                if ((x*1.4) ^ 2 <= n) {
                    // Don't double here b/c very unlikely would ever help 
                    x = x * 1.4;
                } else {
                    // Small increment 
                    x += 0.0001;                       
                }
            }
            // Update difference 
            err = x*x - n;
        }
        if (Math.round(x)^2 == n) {
            return Math.round(x);
        }
        return x;
    }
};
module.exports = code;
