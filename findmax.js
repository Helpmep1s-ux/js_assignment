function findMax(...arr){                   //passing array elements as parameter
    console.log(Math.max(...arr));
}

const nums = [1,5,2,8,2];
findMax(...nums);