console.clear();

/*
 * Complete the 'missingNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

function missingNumbers(arr, brr) {
//arr sorting, brr sorting
//looping arr to pop element from brr
arr.sort((a,b) => (a-b));
brr.sort((a,b) => (a-b));
brr.map(function(currentValue, index, arr){ 
    for (e of arr) {
        if (currentValue === e){
            brr.slice()}}

}) 




}


arr = [
    203, 204, 205, 206,
    207, 208, 203, 204,
    205, 206] 

brr = [
    203, 204, 204, 205,
    206, 207, 205, 208,
    203, 206, 205, 206,
    204]

console.log(missingNumbers(arr, brr));
