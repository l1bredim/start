// let age = prompt('Please tell me you age:');
// console.log(age);

// if (age>=18) {
//     console.log('Уря. Ви повнолітні');
// } else {console.log('Ой. Підростіть)')};

// if ('0') {
//     alert('Verno?')
// }

// let numofCustomers = 0;
// while (numofCustomers > 0) {
//     console.log('Чем помочь? ');
//     numofCustomers = numofCustomers - 1;
// } 

// function printAmount() {
//     console.log(amount.toFixed(3));

// }
// let amount = 99.99;
// amount = amount *2;
// printAmount();

// function formatAmount() {
//     return '$' + amount.toFixed(2);
// }

//  formatAmount();
//  amount = formatAmount();
//  console.log(amount);

// const TAX_RATE = 0.08;

// function calcFinalAmount(amt) {
// //вычесляем новую сумму
// // amt = amt + (amt * TAX_RATE);
// // //возвращаем новую сумму
// // return amt;
// // }

// // let amount = 99.99;
// // amount = calcFinalAmount(amount);

// // console.log(amount.toFixed(2));

// function outer() {
//     let a = 1;
//     console.log(a)
  
//         function inner() {
//             let b = 2;
//             console.log(a+b);
           
//         }
// inner();
// }
// outer();



// Напишите программу для вычисления общей 
// стоимости покупки телефона. 
// Вы будете продолжать покупать телефоны (подсказка: циклы!) 
// пока у вас не закончатся деньги на
// банковском счете. Вы также будете покупать 
// аксессуары для каждого из телефонов до тех
// пор, пока сумма покупки не превысит ваш мысленный предел трат.

// const phonePrice = 142.00;
// const accessoryPrice = 14.50;
// let bank = 2000;
// let numPhone = 0;
// let numAccs = 0;

// let sum = 0;

// while ((sum+phonePrice) < bank) {
//     sum = sum + phonePrice;
//     numPhone++;
    
//     if (sum < bank) {
//         numAccs++;
//         sum = sum + accessoryPrice;
//     } 

    
// }

// console.log('Количество телефонов: ',numPhone);
// console.log('Количество аксесуаров: ',numAccs);
// console.log('Сума общей покупки: $'+sum.toFixed(2));



// let a="null";
// console.log(typeof a);



// var a = [1,2,3];
// var b = [1,2,3];
// var c = "1,2,3";
// console.log(a == c);
// console.log(b == c);
// console.log(a == b);

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));




// console.log(a == b);


// function makeAdder(x) {
//     //параметр х 
//     //внутренняя функция add
//     function add(y) {
//         return y + x;
//     }

//     return add;
// }

// makeAdder(100);

// function User() {
//     let username, password;

//     function doLogin(user,pw) {
//         username = user;
//         password = pw;
//     }

//     let publicAPI = {
//         login: doLogin
//     };

//     return publicAPI;
// }

// let fred = User();

// fred.login('fred', '12Battery34!');

// User();

// function foo() {
//     console.log( this.bar );
//     }
//     var bar = "global";
//     var obj1 = {
//     bar: "obj1",
//     foo: foo
//     };
//     var obj2 = {
//     bar: "obj2"
//     };

// foo();
// obj1.foo();
// foo.call(obj2);
// new foo();


// function foo(a) {
//     console.log(a + b);
//     b = a;
// }

// //зона (номер 1)
// function foo(a) {
//     //это зона а (номер 2)
//     let b = a * 2;
//     function bar(c) {
//         //зона с (номер 3)
//         console.log(a,b,c);
//         //конец зоны 3
//     }

//     bar(b * 3);
//     //конец зоны 2
// }

// foo(2);
// //конец зоны 1


// function foo(str, a) {
//     eval(str); //обман 
//     console.log(a,b);
// }

// let b = 2;
// // foo('var b = 3;',1);

// function foo(str) {
//     "use strict"
//     eval(str);
//     console.log(a);
// }

// foo('let a = 2');


function foo(a) {
    let b = 2;

    function bar() {
        console.log('a')
    }

    let c = 3;
}