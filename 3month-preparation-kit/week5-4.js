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
//looping brr and match value to arr and pop matching element and remain that not matching 
//in the array of brr, delete overlap value
let res = [];
arr.sort((a,b) => (a-b));
brr.sort((a,b) => (a-b)); 
// find max and min value of brr = brr[0], brr[-1]
console.log(brr);

let zeroBrray = new Array(brr[brr.length-1] - brr[0] + 1).fill(0);
// zeroArray.fill(0, 0, brr[brr.length-1] - brr[0]);
console.log(zeroBrray);

for (let i of brr) {
    zeroBrray[i-brr[0]]++;
} 
console.log(zeroBrray);
;
for (let i of arr) {
    zeroBrray[i - brr[0]]--;
}

for (let i in zeroBrray) {
    if (zeroBrray[i] > 0) {
        res.push(brr[0] + Number(i))
        console.log(res)
    }
}
return res; 
}


arr = [11, 4, 11, 7, 13, 4, 12, 11, 10, 14] 

brr = [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12]

console.log(missingNumbers(arr, brr));
