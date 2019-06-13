public class Code {

    // Returns "Hello World!"
    public static String helloWorld() {
        return "Hello World!";
    }

    // Take a single-spaced <sentence>, and capitalize every <n> word starting with <offset>.
    public static String capitalizeEveryNthWord(String sentence, Integer offset, Integer n) {
        String[] words = sentence.split(" ");

        if (offset < words.length) {
            int index = sentence.indexOf(words[offset]); //problematic for repeating words

            sentence = sentence.substring(0, index) + 
                sentence.substring(index, index+1).toUpperCase() + 
                sentence.substring(index+1);

            return capitalizeEveryNthWord(sentence, offset+n, n);
        } 
        return sentence;
    }

    // Determine if a number is prime
    public static Boolean isPrime(Integer n) {
        // 1 and 0 
        if (Math.abs(n) <= 1) {
            return false;
        }
        // No evens > 2 
        if (n % 2 == 0 && n != 2) {
            return false; 
        }

        // Loop over odd numbers 
        for (int i = 3; i < Math.abs(n/2); i+=2) {
            if (n % i == 0 && i != Math.abs(n)) {
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
    public static Double goldenRatio(Double a, Double b) {
        Double num = a + b;
        Double denom = b;
        Double ratio = num / denom;

        if (Math.abs(b/a - ratio) > 0.0001) {
            return goldenRatio(denom, num);            
        }

        return ratio;
    }

    // Give the nth Fibionacci number
    // Starting with 1 and 1, a Fibionacci number is the sum of the previous two.
    public static Integer fibionacci(Integer n) {
        if (n <= 1) {
            return n;
        }     
           
        int f1 = 0;
        int f2 = 1;
        int sum = 0;
        for (int i = 2; i <= n; i++) {
            sum = f1 + f2;
            f1 = f2;
            f2 = sum;            
        }
        return sum;
    }

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    public static Double squareRoot(Double n) {
        // Imaginary 
        if (n < 0) {
            return 0.0;
        }
        Double x = n / 2;
        Double dif = x*x - n;
        while (Math.abs(dif) > 0.0001) {
            if (dif > 0) {
                if (x/2 * x/2 >= n) {
                    // Zone in by half
                    x = x / 2;
                } else {
                    // Small increment 
                    x -= 0.0001;                    
                }
            } else {
                if (x*1.4 * x*1.4 <= n) {
                    // Don't double here b/c very unlikely would help 
                    x = x * 1.4;
                } else {
                    // Small increment 
                    x += 0.0001;                       
                }
            }
            dif = x*x - n;
        }
        if (Math.round(x)*Math.round(x) == n) {
            return (double)Math.round(x);
        }
        return x;
    }
}
