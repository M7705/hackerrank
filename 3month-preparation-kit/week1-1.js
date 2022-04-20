console.clear();

function plusMinus(arr) {
    let mother = arr.length;
    let positive = arr.filter((x) => x > 0).length;
    let negative = arr.filter((x) => x < 0).length;
    let zero = arr.filter((x) => x === 0).length;
    console.log((positive/mother).toFixed(6),'\n',(negative/mother).toFixed(6),'\n',(zero/mother).toFixed(6))
    
}

const arr = [1, 1, -1, -1, -1, 0]

plusMinus(arr);
