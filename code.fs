module Code

// Returns "Hello World!"
let helloWorld() = 
    "Hello World!"
    
// Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
let capitalizeEveryNthWord sentence offset count = 
    let splitWords = (fun (words : string) -> Seq.toArray(words.Split ' '))
    let mutable words = splitWords sentence
    let mutable capLocation = (int)offset
    let mutable index = 0
    
    for word in words do
      if (index = capLocation) then
        let cap = System.Globalization.CultureInfo.InvariantCulture.TextInfo.ToTitleCase(word)
        capLocation <- capLocation + count
        Array.set words index cap

      index <- index + 1   


    let result = words |> String.concat " ";
    result

    

// Determine if a number is prime
let isPrime n = 
    let mutable prime = true
    if (abs n <= 1) then
      prime <- false
    elif (n % 2 = 0 && abs n <> 2) then
      prime <- false
    else 
      for i in 3 .. 2 .. abs n/2 do
        if (n % i = 0) then
          prime <- false
    
    prime
    
// Calculate the golden ratio.
// Given two numbers a and b with a > b > 0, the ratio is b / a.
// Let c = a + b, then the ratio c / b is closer to the golden ratio.
// Let d = b + c, then the ratio d / c is closer to the golden ratio. 
// Let e = c + d, then the ratio e / d is closer to the golden ratio.
// If you continue this process, the result will trend towards the golden ratio.
let goldenRatio a b = 
    let mutable num : float = a + b
    let mutable denom : float = b
    let mutable ratio : float = num / denom
    let mutable dV : float = 1.0
    let mutable notGolden : bool = true
    while notGolden do
      num <- num + denom
      denom <- num - denom
      dV <- ratio - num / denom
      ratio <- num / denom      

      if (abs dV < 0.0001) then
        notGolden <- false 

    ratio



// Give the nth Fibonacci number
// Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
let fibonacci n =
    let mutable sum : int = 1
    let mutable prevSum : int = 0
    if (n <= 1) then
      sum <- n
    else 
      for i in 2 .. n do
        sum <- sum + prevSum
        prevSum <- sum - prevSum

    sum

// Give the square root of a number
// Using a binary search algorithm, search for the square root of a given number.
// Do not use the built-in square root function.
let squareRoot n =
    let squared : float = n
    let mutable x : float = n / 2.

    while (abs (x**2. - squared) > 0.0001) do
      if ((x/2.)**2. >= squared) then
        x <- x/2.
      elif (x**2. > squared) then
        x <- x - 0.0001
      else
        x <- x + 0.0001

    if (round(x)**2. = squared) then
       x <- round(x)
    x
    