<?php

class Code {
    // Returns "Hello World!"
    static function helloWorld() {
        //throw new Error("Not Implemented");
		echo "Hello World!";
    }

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    static function capitalizeEveryNthWord($sentence, $offset, $n) {
        //throw new Error("Not Implemented");
		$words = explode(' ', $sentence);

		for ($i = $offset; $i < count($words); $i += $n) {
		    $words[$i] = strtoupper($words[$i]);
		}
		$sentence = implode(' ', $words); 

		echo $sentence;
    }
    
    // Determine if a number is prime
    static function isPrime($n) {
        //throw new Error("Not Implemented");
		// Checking 1 and 2 for prime
		if ($n == 1) {
			return false;
		}
		if ($n == 2) {
			return true;
		}

		$x = sqrt($n);
		$x = floor($x);
		for ($i = 2; $i <= $x; ++$i) {
			if ($n % $i == 0) {
				break;
			}
		}
 
		if($x == $i-1) {
			return true;
		} else {
			return false;
		}
	}
    
    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio. 
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    static function goldenRatio($a, $b) {
        //throw new Error("Not Implemented");
		if($a > $b && $b > 0) { 
			
			$ratio = $b / $a;
			
			for($x = 0; $x <= 100; $x++) {
				$c = $a + $b;
				$ratio = $c / $b;
				
				$d = $c + $b;
				$a = $b;
				$b = $c;
				$c = $d;
			}
			
		echo "The Golden Ratio is ".$ratio."<br>";
		
		}
    }

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    static function fibonacci($n) {
        //throw new Error("Not Implemented");
	    $fibarray = array(0, 1);
	   	for ($i=2; $i<=100; ++$i) {
	    	$fibarray[$i] = $fibarray[$i-1] + $fibarray[$i-2];
	   	}
	    return $fibarray[$n];
    }

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    static function squareRoot($n) {
        //throw new Error("Not Implemented");
	    $x = $n;
	    $y = 1;
	    while($x > $y) {
	    	$x = ($x + $y)/2;
	    	$y = $n/$x;
	    }
	    return $x;
    }
}