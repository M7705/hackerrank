# 해커랭크 정리 
## week1-1 plusMinus
```js
배열.filter(함수(인자));

숫자.tofixed();
```

## week1-2 miniMaxSum
```js
배열.slice(처음, 끝)
배열.splice(인덱스, 몇개, 새로운 값들)
```
slice는 기존의 배열을 바꾸지 않음. 반면에 splice는 기존의 배열을 변경함. 
```js
배열.reduce(함수(합계, 현재값, 현재인덱스, 배열), 처음값)
```

## week1-3 timeConversion
```js
Number(문자)
//문자를 숫자로 변환 
숫자.toString()
//숫자를 문자로 변환. ()안에는 몇진법으로 나타낼지 옵션을 넣을 수 있음. 공란이면 10진법.


## week5-1 MaxMin
```js
배열.forEach(함수(현재값, 인덱스));
```