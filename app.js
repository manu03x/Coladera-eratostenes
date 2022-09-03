let array = [];

let n = 1000;

for(let i = 0; i < n; i++ ) {
    array[i] = 1
}


for(let i = 2; i < n; i++ ) {
    if(array[i] === 1){
        for(let x = i * i; x < n; x += i) {
            array[x] = 0
        }
    }
}

for (let i = 2; i < n; i++) {
    if (array[i] === 1) {
        array[i] = i;
        console.log(i);
    }
}