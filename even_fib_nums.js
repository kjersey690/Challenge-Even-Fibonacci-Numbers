/*jshint esversion: 6 */
/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var a= 1;
   var b=0;
   let temp;
   let arr=[];

 do{
   temp = a;
      a = a+b;
      b = temp;
    if(temp%2 ===0){
     arr.push(temp);
    }

 }
 while(temp <= maxFibValue);

  let sum=arr.reduce((prev,current)=>{
    return prev+current;
  },0);

  return sum;
}




// // bonus round
function _highestFibonacciNumber (maxFibValue){
//   var highest = 0;

//   //define your base case, validate your input


//   //do your work here

//   return highest;
 };

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};