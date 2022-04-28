console.clear();

/*
 * Complete the 'countSort' function below.
 *
 * The function accepts 2D_STRING_ARRAY arr as parameter.
 */


let arr = [[ '0', 'ab' ],       [ '6', 'cd' ],
    [ '0', 'ef' ],       [ '6', 'gh' ],
    [ '4', 'ij' ],       [ '0', 'ab' ],
    [ '6', 'cd' ],       [ '0', 'ef' ],
    [ '6', 'gh' ],       [ '0', 'ij' ],
    [ '4', 'that' ],     [ '3', 'be' ],
    [ '0', 'to' ],       [ '1', 'be' ],
    [ '5', 'question' ], [ '1', 'or' ],
    [ '2', 'not' ],      [ '4', 'is' ],
    [ '2', 'to' ],       [ '4', 'the' ]]

function countSort(arr) {
    // change string to - until the half of the array
    console.log(arr); 
    let halfNumber = arr.length / 2
    for (let i in arr) {
        if (i < halfNumber) {
            arr[i][1] = '-'
        } 
        else {
            break
        }
    }
    let countingArr = new Array(100).fill("")
    console.log(countingArr);
    // matching array[0] number and put string in the `countingArr` with space between them
    for (let i = 0; i < arr.length; i++) {
        countingArr[arr[i][0]] = countingArr[arr[i][0]] + " " + arr[i][1]
    }
    console.log(countingArr);
let countingString = countingArr.reduce(function(acc, cv) 
{return acc + cv},'');
console.log(countingString.slice(1,countingString.length));};

console.log(countSort(arr))
