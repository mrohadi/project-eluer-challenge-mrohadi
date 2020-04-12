/* The Fibonacci Series Number */
/* The fibonacci series is generated by adding the two previous number.
*  By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.
*  In this problem, we have to adding the even-valued number of fibonacci series whose values don't exceed four milion,
   but i also want to make the whole fibonacci series.
*/

/* Let's make the fibonacci series function */
function fibonacci(num){
    /* Making fibonacci series funtion */
    var fib = [1, 2];   //Initialize fibonacci array
    var i = 0;    //This is the property for adding next fibonacci
    var total = 0;    //Initialize the total sum of the value number of the fibonanci series
    var newFib = [1, 2];   //Initialize the new fibonanci series array
  
    /* Lopp through the fibonacci */
    while(fib[0] + fib[1] < num){
        i = fib[0] + fib[1];
        newFib.push(i);
        fib[0] = fib[1];
        fib[1] = i;
        
        /* To check the even number */
        if(i % 2 == 0){
            total += i;
         }
    }
    console.log(newFib);
    console.log(total);
};
var test2 = fibonacci(4000000);