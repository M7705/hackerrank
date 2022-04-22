console.clear();

/*
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const mLength = 6 - n;
    // const mDigit = 0;
    // const mLower = 0;
    // const mUpper = 0;
    let res = 0;
    const sCharacter = '!@#$%^&*()-+'
    if (password.toUpperCase() === password) {
        res++;
    };
    if (password.toLowerCase() === password) {
        res++;
    }
    if (/\d/.test(password) != true ) {
        res++;
    }
    let scCheck = 0
    for(i = 0; i < sCharacter.length;i++){
        if(password.indexOf(sCharacter[i]) > -1){
            break;
            }
        else {
            scCheck++}}
    if (scCheck === sCharacter.length) {
        res++}
    if (res >= mLength) {
        return res
    }
    else {
        return mLength
    }
    }

    let password = "1234cC!*"

console.log(minimumNumber(8, password));

    
    
