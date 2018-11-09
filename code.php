<?php

class Code {
    // Returns "Hello World!"
    static function helloWorld() {
//        throw new Error("Not Implemented");
        return 'Hello World!';
    }

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    static function capitalizeEveryNthWord($sentence, $offset, $n) {
//        throw new Error("Not Implemented");
        $sentenceArray = explode(' ', $sentence);
        for ($i = $offset; $i < count($sentenceArray);$i += $n)
        {
            $sentenceArray[$i] = ucwords($sentenceArray[$i]);

        }

        return implode(' ', $sentenceArray);
    }
    
    // Determine if a number is prime
    static function isPrime($n) {
//        throw new Error("Not Implemented");
        if ($n <= 1) {
            return false;
        }
        else if ($n <= 3) {
            return true;
        }

        $squareRoot = sqrt($n);
        for ($i = 2; $i <= $squareRoot; $i++) {
            if ($n % $i == 0) {
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
    static function goldenRatio($a, $b) {
//        throw new Error("Not Implemented");
        $goldenRatio = round(1.61803399, 4);
        if ($a > 0 && $b > 0)
        {
            $testingRatio = $b / $a;
            if ($testingRatio < $goldenRatio || $goldenRatio < $testingRatio) {
                $c = $a + $b;
                return self::goldenRatio($b, $c);
            }
            return $testingRatio;
        }
    }

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    static function fibonacci($n) {
//        throw new Error("Not Implemented");
        if ($n <= 1) return $n;
        return self::fibonacci($n - 1) + self::fibonacci($n - 2);
    }

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    static function squareRoot($n) {
//        throw new Error("Not Implemented");
        $lowRange = 1;
        $highRange = $n;

        while ($lowRange <= $highRange) {
            $squareRoot = $lowRange + ($highRange - $lowRange) / 2;
            $square = $squareRoot * $squareRoot;

            if (abs($square - $n) < 0.0001) {
                return round($squareRoot, 4);
            }
            else if($square < $n) {
                $lowRange = $squareRoot;
            }
            else {
                $highRange = $squareRoot;
            }
        }
    }
}