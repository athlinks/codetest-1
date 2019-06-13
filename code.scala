object Code {
    // Returns "Hello World!"
    def helloWorld() : String = {
        return "Hello World!";
    }

    // Take a single-spaced <sentence>, and capitalize every <n> word starting with <offset>.
    def capitalizeEveryNthWord(sentence:String, offset:Integer, n:Integer) : String = {
        var capLocation = offset;
        var capWords = for ((word, count) <- sentence.split(" ").zipWithIndex) yield {
            if (count == capLocation) {
                val cap = word.capitalize                
                capLocation += n
                cap 
            } else {
                word
            }
        } 
        return capWords.mkString(" ");    
    }

    // Determine if a number is prime
    def isPrime(n:Integer) : Boolean = {
        // 1 and 0 
        if (Math.abs(n) <= 1) {
            return false;
        }
        // No evens > 2 
        if (n % 2 == 0 && Math.abs(n) != 2) {
            return false; 
        }

        // Loop over odd numbers 
        for (i <- 3 to Math.abs(n/2) by 2) {
            if (n % i == 0) {
                return false;
            }
        }

        return true;
    }
    
    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio. 
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    def goldenRatio(a:Double, b:Double) : Double = {
        val num = a + b;
        val denom = b;
        val ratio = num / denom;

        if (Math.abs(b/a - ratio) > 0.0001) {
            return goldenRatio(denom, num);            
        }

        return ratio;
    }

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    def fibonacci(n:Integer) : Integer = {
        if (n <= 1) {
            return n;
        }     
           
        var sum = 1;
        var prevSum = 0;
        for (i <- 2 to n) {
            sum += prevSum;  
            prevSum = sum - prevSum;         
        }
        return sum;
    }
    
    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    def squareRoot(n:Double) : Double = {
        // Imaginary 
        if (n < 0) {
            throw new Error("Input must be positive to calculate root.");
        }
        var x = n / 2;
        var err = x*x - n;
        while (Math.abs(err) > 0.0001) {
            if (err > 0) {
                if (x/2 * x/2 >= n) {
                    // Zone in by half
                    x = x / 2;
                } else {
                    // Small increment                   
                    x -= 0.0001;
                }
            } else {
                if (x*1.4 * x*1.4 <= n) {
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
        if (Math.round(x)*Math.round(x) == n) {
            return Math.round(x);
        }
        return x;
    }
}
