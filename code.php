<?php

class Code {
    // Returns "Hello World!"
    static function helloWorld() {
        return "Hello World!";
    }

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    static function capitalizeEveryNthWord($sentence, $offset, $n) {
        $words = explode(" ", $sentence);
        $sentence = ""; 
        $counter = 0;
        $nextStop = $offset;
        foreach ($words as $word) {
            if ($counter == $nextStop) {
                $word = ucwords($word);
                $nextStop += $n;
            }
            // Rebuild the sentence 
            $sentence .= $word . " ";
            $counter++;            
        }
        // Remove ending space 
        return rtrim($sentence, " "); 
    }
    
    // Determine if a number is prime
    static function isPrime($n) {
        // Unable to test this one b/c weird bug
        // Returning FALSE results in 'Call to undefined function array_find()'

        // 1 and 0 
        if (abs($n) <= 1) {
            return FALSE;
        }
        // No evens > 2 
        if ($n % 2 == 0 && abs($n) != 2) {
            return FALSE; 
        }

        // Loop over odd numbers 
        for ($i = 3; $i < abs($n/2); $i+=2) {
            if ($n % $i == 0) {
                return FALSE;
            }
        }

        return TRUE;
    }
    
    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio. 
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    static function goldenRatio($a, $b) {
        $num = $a + $b;
        $denom = $b;
        $ratio = $num / $denom;
        $temp = 0;
        $dv = 1;

        while(abs($dv) > 0.0001) {
            $temp = $num;
            $num += $denom;
            $denom = $temp;
            $dv = $ratio - $num/$denom;
            $ratio = $num/$denom;                   
        }
        return $ratio;
    }

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    static function fibonacci($n) {
        if ($n <= 1) {
            return $n;
        }     
           
        $sum = 1;
        $prevSum = 0;
        for ($i = 2; $i <= $n; $i++) {
            $sum += $prevSum;  
            $prevSum = $sum - $prevSum;         
        }
        return $sum;
    }

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    static function squareRoot($n) {
        // Imaginary 
        if ($n < 0) {
            throw new Error("Input must be positive to calculate root.");
        }
        $x = $n / 2;
        $err = $x*$x - $n;
        while (abs($err) > .0001) {
            if ($err > 0) {
                if (($x/2) ^ 2 >= $n) {
                    // Zone in by half
                    $x = $x / 2;
                } else {
                    // Small increment (10% of the error or .0001)                 
                    $x -= (.1 * $err >= 1 ? .1 * err : .0001);
                }
            } else {
                if (($x*1.4) ^ 2 <= $n) {
                    // Don't double here b/c very unlikely would ever help 
                    $x = $x * 1.4;
                } else {
                    // Small increment (10% of the error or .0001) 
                    $x += (.1 * $err >= 1 ? .1 * err : .0001);                    
                }
            }
            // Update difference 
            $err = $x*$x - $n;
        }
        if (round($x)^2 == $n) {
            return round($x);
        }
        return $x;
    }
}