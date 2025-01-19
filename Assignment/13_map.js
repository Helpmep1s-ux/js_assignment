const arr1 = [0,1,2,3];
const arr2 = arr1.map(dblfnc);

function dblfnc(x){
    return [x , x];
}

console.log(arr1);
console.log(arr2);