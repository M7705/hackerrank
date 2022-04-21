console.clear();

// Example

// Pick any two elements, say .

// Testing for all pairs, the solution  provides the minimum unfairness.

// Note: Integers in  may not be unique.

// Function Description

// Complete the maxMin function in the editor below.
// maxMin has the following parameter(s):

// int k: the number of elements to select
// int arr[n]:: an array of integers



// My solution

const k = 3
const arr = [10,  100, 300, 200, 1000, 20, 30]

function maxMin(k, arr) {
let res = Infinity;
arr.sort((a,b) => (a-b));
for (let i = 0; i <= arr.length-k ; i++ ) {
    if (arr[i+k-1] - arr[i] < res) {
        res = arr[i+k-1] - arr[i]
    } 
}
return res;
}

maxMin(k,arr)

// Discussion Solution

function maxMin(k, arr) {
    let minUnfairness = Infinity
    
    arr.sort((a,b) => a - b)
    
    arr.forEach((element, index) => {
        if(arr[index + k - 1] - element < minUnfairness){
            minUnfairness = arr[index + k - 1] - element
        }
    })
    return minUnfairness
}