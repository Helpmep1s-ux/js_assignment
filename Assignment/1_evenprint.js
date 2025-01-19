const EvenPrint = () =>{            //arrow function to print even numbers in console
    for(let i=1;i<=51;i++){         //loop to take numbers from 1 to 50
        if(i%2==0){                 //condition to check whether current number is divisible by 2
            console.log(i);         //print the number into the console if the number is even
        }
    }
}

EvenPrint();                        //call of the function