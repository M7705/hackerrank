console.clear();

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a,b) => (a-b));
    //리듀스를 이용하여 인덱스 0에서 3까지의 배열의 합을 구하고, 
    //인덱스 1에서 4까지의 배열의 합을 구하여 console.log
    const minArr = arr.slice(0,4);
    const maxArr = arr.slice(-4);
    const minArrSum = minArr.reduce((total, currentValue) => total + currentValue)
    const maxArrSum = maxArr.reduce((total, currentValue) => total + currentValue)
    console.log(minArrSum, maxArrSum);

}

let arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);
