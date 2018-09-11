var code = {
    // Returns "Hello World!"
    helloWorld: function() {
        return "Hello World!";
    },

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset, n) {
        let words = sentence.split(" ");
        for(let i = offset; i < words.length; i++){
            if((i - offset) % n  === 0){
                words[i] = words[i][0].toUpperCase() + words[i].substring(1);
            }
        }
        return words.join(" ");
    },
    
    // Determine if a number is prime
    isPrime: function(n) {
        if(n <= 1) return false;
        if(n <= 3) return true;
        if(n % 2 === 0 || n % 3 === 0) return false; 
        for(let i = 5; n >= i * i; i += 6){
            if (n % i === 0 || n % (i + 2) === 0){
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
        let nums = [a,b];
        for(let i = 0; i < 1000; i++){
            nums.push(nums[i] + nums[i+1]);
        }
        return nums[nums.length - 1] / nums[nums.length - 2];
    },

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    fibonacci: function(n) {
        if(n === 0) return 0;
        let fibSequence = [0,1];
        for(let i = 1; i < n; i++){
            fibSequence.push(fibSequence[i-1] + fibSequence[i]);
        }
        return fibSequence.pop();
    },

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    squareRoot: function(n) {
        if(n === 0) return 0;
        if(n === 1) return 1;
        if(n < 0) return "imaginary";
        let low = 0;
        let high = n;
        if(n < 1) high = 1;
        let mid = high / 2;
        let epsilon = .00000000000001; // reduced Number.EPSILON for acceptable margin of error
        let count = 0;
        while(count < 100000000){
            let test = mid * mid;
            if(Math.abs(test - n) < epsilon){ // test for equality within precision of epsilon
                return mid;
            } else if(test > n){
                high = mid; // move high down
                mid -= (mid - low) / 2;
            } else {
                low = mid; // move low up
                mid += (high - mid) / 2;
            }
            count++;
        }
        return mid; // max loop count force return of current mid value
    }
};
module.exports = code;
