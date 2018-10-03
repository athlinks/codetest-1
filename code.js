var code = {
    // Returns "Hello World!"
    helloWorld: function() {
        // throw new Error("Not Implemented");
        return "Hello World!";
    },

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset, n) {
        let word = sentence.split(" ");

        for (let i = offset; i < word.length; i += n) {
            word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
        }
        return(word.join(" "));
    },
    
    // Determine if a number is prime
    // 0 and 1 are not prime, 2 is
    isPrime: function(n) {
        if (n === 2) {
            return true
        } else if (n < 2) {
            return false
        }
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false
            }
        }
        return true
    },
    
    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio. 
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    goldenRatio: function(a, b) {
            z = null; // temp result
            for (let i = 0; i < 20; i++) { // iterate a few random times to get closer g ratio
                z = b + a; 
                b = a; 
                a = z;
            }  
            return a / b;
    },

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    //  Math formula is Fn = F(n-1) F(n-2)
    fibonacci: function (n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        return code.fibonacci(n - 2) + code.fibonacci(n - 1)
    },

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    // no Math.sqrt()?
    // Limitation - deals with integers only
    squareRoot: function(num) {
        let low = 0;
        let high = num;
        // perform binary search on the range from low number to high number
        while (low < high && num >= 4) {  // numbers less then 4 to be handled outside this loop
            let middle = Math.floor((low + high) / 2);  // get the middle of the range
            const sqOfMiddle = middle * middle;
            if (sqOfMiddle === num) { // return middle if it is a sqrt match
                return middle
            }
            // if sq of middle does not match 'num', change the range to upper or lower bound accordingly
            if (sqOfMiddle < num) {
                low = middle + 1  // go to higher range      
            } else {
                high = middle - 1  // go to lower range
            }
        }

        // at this point we have values for 'low' and 'high' within one integer of difference
        // if either 'low' or 'high' is a smatch, return value  
        if (low * low === num) {
            return low;
        } else if (high * high === num) {
            return high;
        } else {
            // cheating - adding an increment to the 'low' until it is close enough to 'num'    
            const inc = 0.000001; //   
            while (low * low !== num && low * low < num) { // exit when a match or low^2 exceeds num
                low += inc;
            }
            return low.toFixed(5); // limit precision of decimals    
        }
    }
};

module.exports = code;
