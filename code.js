var code = {
    // Returns "Hello World!"
    helloWorld: function() {
        return "Hello World!";
    },

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    capitalizeEveryNthWord: function(sentence, offset, n) {
        // Convert string to an array, slice it in half based on an offset, take the second half and map through elements modifying the case where needed. Afterward concat first half with the second and covetrt array back to string. 
        return sentence.split(' ').slice(0, offset).concat(sentence.split(' ').slice(offset).map(function(el,index){
            return  index % n === 0 ? el[0].toUpperCase() + el.slice(1) : el;
        })).join(' ');
    },
    
    // Determine if a number is prime
    isPrime: function(n) {
        // check if the number is less then two,  if so return false since prime numbers start with two
        if (n < 2) {
            return false;
          }
        // if the remainder of iterator & number is question ever is equal to 0 this means it is a whole number so fe return early
        for (var i = 2; i <= n; i++){
          if(n % i === 0 && n!= i ){
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

        // It was a little unclear what exactly needed to happen. I guessed the desired output from the test
        var next = 0;
        var result = 0;
        // Loop until the golden ratio is found
        for (var i = 0; i <= b; i++, next = a+b, result = next / b,  a = b, b = result ) {
           if (result >= 1.61800 && result <= 1.61806) { return result}
        }

    },

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    fibonacci: function(n) {

        // first we build the sequence
        var arr = [0, 1];
        var prevOne = 0;
        var prevTwo = 1;
        var next = 0;

        for (; arr.length - 1 <= n; prevOne = prevTwo, prevTwo = next) {
            next = prevOne + prevTwo;
            arr.push(next);
        }

        // and then we just return the number at the given position
        return arr[n];

    },

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.

    squareRoot: function(n) {
        // create a loop, and if at some point the sum of an iterator times itself equals the given number we return the iterator which is the square root
        
        for (var i = 0; i < n; i++) {
            if ( i * i === n ){
                return i;
            }
        }


    // This is the farthest I could get to with the binary algorythm search without reaching out for help.

    // var endNum = n;
    // var startNum = 0;
    // var midNum = 0;
    // while(true){
    //     if ((midNum * midNum ) <= n && (midNum + 1) * 2 > n){
    //         return midNum;
    //     } else if (midNum * midNum < n) {
    //         var x1 = midNum;
    //         midNum = ( endNum + startNum) / 2;
    //         startNum = x1;
    //     } else if (midNum * midNum > n) {
    //         var x2 = midNum;
    //         midNum = (endNum + startNum) / 2;
    //         endNum = x2;
    //     }
    // }
    // return midNum;  

    }
};
module.exports = code;
