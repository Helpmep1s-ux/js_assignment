let l = 3;              //block scoped
var v = 4;              //function scoped
const c = 5;

console.log(l,v,c);

//let l = 'let';        //This line causes error as l cannot be redeclared in same block
var v = 'var';         //This line is viable as var can be redeclared in same function
//c = 'const';        //This line causes error.

console.log(l,v,c);