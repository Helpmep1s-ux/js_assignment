const mix_num = [11,10,23,44,63,33,20,80,75,96];
const even = mix_num.filter(isEven);

function isEven(x){
    if(x%2==0){
        return x
    }
}

console.log(even);