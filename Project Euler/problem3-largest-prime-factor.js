/* Largest Prime Factor */
/* Prime factor is which prime numbers multiply together to make the original number. 
   Example: The prime factors of 15 are 3 and 5 (because 3×5=15, and 3 and 5 are prime numbers).
   And in this problem we have to find out the max of prime factor number
*/

/* Let's make the function to find out the max of prime factor number */
function findPrimeFactor(num){
    //Make the prime factor number array
    var primeFactor = [];
    //This while loop is to check whether the num can be devided by 2, and add 2 into primeFactor array.
    while (num % 2 === 0){  
        primeFactor.push(2);
        num /= 2;
    };
    //After that, if the num can't devided by 2, let's calculate the sqrt of the num and check it into loop         
    var sqrtNumber = Math.sqrt(num);
    for (var i = 3; i < sqrtNumber + 1; i++){
        while (num % i === 0){
            primeFactor.push(i);
            num /= i;
        };
    };
    //If the num can't devided by any number, add it into primeFacto array           
    if (num > 2){
        primeFactor.push(num);
    };
    //And finally find out the max number of the prime factor numbers        
    var min = null;
    var max = null;
    for (var i = 0, len = primeFactor.length; i < len; ++i){
        var elem = primeFactor[i];
        if (min === null || min > elem) min = elem;
        if (max === null || max < elem) max = elem;
     };
     return max;   
};
var test = findPrimeFactor(600851475143);
