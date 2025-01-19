function calculate(num1 , num2 , oprtr){
    switch(oprtr){                                      //switch case for different operators
        case '+': return num1 + num2;                   
                    break;
        case '-': return num1-num2;
                    break;
        case '*': return num1*num2;
                    break;
        case '/': return num1/num2;
                    break;
        default: return 'invalid operator';             //if operator is invalid
    }
}

console.log(calculate(3,4,'*'));                        
console.log(calculate(90,109,'+'));
console.log(calculate(50,32,'-'));
console.log(calculate(49,7,'/'));
console.log(calculate(9,'i','-'));                      //wrong number input
console.log(calculate(9,2,3));                          //wrong operator input