console.clear();

// *
//  * Complete the 'timeConversion' function below.
//  *
//  * The function is expected to return a STRING.
//  * The function accepts STRING s as parameter.
//  */

function timeConversion(s) {
    if (s[s.length-2] === "A" && s.slice(0,2) !== "12") {
        return s.slice(0,8)};
    if (s[s.length-2] === "A" && s.slice(0,2) === "12") {
        return "00"+s.slice(2,8);}
    if (s[s.length-2] === "P" && s.slice(0,2) === "12") {
        return s.slice(0,8)};
    if (s[s.length-2] === "P" && s.slice(0,2) !== "12") {
        return (12+Number(s.slice(0,2))).toString()+ s.slice(2,8)
    }

    // }
    //기본 규칙: am은 그대로 사용하고, pm은 첫 인덱스 2글자에 12를 더함
    // 1200 am과 1200pm설정>>> am은 12를 빼고 나열, pm은 그대로 나열

}

s = '12:45:54PM'

console.log(timeConversion(s));
