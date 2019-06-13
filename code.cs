using System;

class Code {
    // Returns "Hello World!"
    public static string HelloWorld() {
        return "Hello World!";
    }

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
	public static string CapitalizeEveryNthWord(string sentence, int offset, int n) {
        string[] words = sentence.Split(' ');
        string result = "";
        int j = 0;        
        for (int i = 0; i < words.Length; i++) {
            if (i == offset + j*n) {
                string word = words[i];
                words[i] = char.ToUpper(word[0]) + word.Substring(1);                
                j++;
            }
            if (i < words.Length-1) {
                result += words[i] + " ";                
            } else {
                result += words[i];
            }
        }
        return result;
	}
    
    // Determine if a number is prime
    public static bool IsPrime(int n) {

        if (Math.Abs(n) <= 1) {
            return false;
        }

        for (int i = 2; i <= Math.Abs(n/2); i++) {
            if (n % i == 0 && i != Math.Abs(n)) {
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
    public static double GoldenRatio(double a, double b) {
        double num = a + b;
        double denom = b;
        double ratio = num / denom;
        double dV = 1;
        while (Math.Abs(dV) > 0.0001) {
            num += denom;
            denom = num - denom;            
            dV = ratio - num / denom;
            ratio = num / denom;
        }

        return ratio;
    }
    
    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    public static int Fibonacci(int n) {
        if (n <= 1) {
            return n;
        }

        return Fibonacci(n-1) + Fibonacci(n-2);
    }
    
    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    public static double SquareRoot(double n) {
        double a = n / 2;
        while (Math.Abs(a*a - n) > 0.0001) {
            if ( a/2 * a/2 >= n) {
                a = a/2;
            }
            else if (a * a > n) {
                a -= 0.0001;
            } else {
                a += 0.0001;
            }
        }
        if (Math.Round(a)*Math.Round(a) == n) {
            return Math.Round(a);
        }
        return a;
    }
}
