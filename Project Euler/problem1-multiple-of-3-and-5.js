//Function Declaration of multiple of 3 and 5 problem
function sumOfMultiple(num){
    var total;
    total = 0;
    //Loop through the num 
    for (let i = 0; i < num; i++){
        if (i % 3 == 0 || i % 5 == 0){
            total += i;
         };
     };
     return total;
};
//Now let's try our function through var test
var test = sumOfMultiple(10000);
