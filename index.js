//greetDasol은 sayHello의 리턴 값이다?
function sayHello(name, age){
    console.log(`Hello my name is ${name}. I'm ${age} years old`);
}
const greetDasol = sayHello('dasol', 25);
console.log(dasol);//undefined

//아래 function을 사용해야 정확한 사용법 return
function sayHello(name, age){
    return `My name is ${name}. I'm ${age} years old`;
}
const greetDasol2 = sayHello('Dasol', 25);
console.log(greeDasol2);

//calculator function
const calculator = {
    plus: function(a, b){
        return a+b;
    },
    minus: function(a, b){
        return a-b;
    },
    multiplication: function(a, b){
        return a*b;
    },
    division: function(a, b){
        return a/b;
    },
    square: function(a, b){
        let temp = a;
        for(i=1; i<b; i++){
            a = a*temp;
        }
        return a;
    }
}

console.log(`plus: ${calculator.plus(1,2)}`);
console.log(`minus: ${calculator.minus(1,2)}`);
console.log(`multiplication: ${calculator.multiplication(1,2)}`);
console.log(`division: ${calculator.division(4,2)}`);
console.log(`square: ${calculator.square(2,3)}`);