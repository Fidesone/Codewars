let numbers= [1,2,3];
let num=0
console.log(squareSum(numbers));
function squareSum(numbers){
    for ( var i= 0; i<numbers.length; i++){
        num +=Math.pow(numbers[i], 2);
        
   }
    return num; 
}
