function power(num, res){
    let a = 0;
    while(res>=num){
        res/=num;
        a++; 
    }
    console.log('Power of number: ', a)
}

let x = prompt("Enter the value x: "); 

x = Number(x);

    let a = x*x;
    let b = a*a;
    let c = b*b;
    let d = c*c;
    let e;
    let f;
//1
let one = c;
//2
let two = d*x;
//3
let three = c*a;
//4
let four = c*b*x;
//5
let five = d*b*x;
//6
let six;
b = a*x;
c = b*b;
d = c*c;
e = d*b;
six = e;
//7
let seven = d*c*b;
//8
let eight;
b = a*a;
c = b*b;
d = c*c;
e = d*d;
f = e*e;
eight = f;
//9
let nine;
b = a*x;
c = b*a;
d = c*c;
e = d*d;
nine = e;

power(x, one);
power(x, two);
power(x, three);
power(x, four);
power(x, five);
power(x, six);
power(x, seven);
power(x, eight);
power(x, nine);