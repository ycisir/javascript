// "use strict"

// variables declaration 

// let firstName = 'Jack'
// console.log(firstName.length-1)
// let k = firstName[firstName.length-1]
// console.log(k) 

// console.log(typeof(firstName))
// console.log(firstName.slice(0,3))
// let num = 11
// console.log(typeof(num))

// let newName = firstName.toUpperCase()
// console.log(newName)


// let num = 11
// console.log(typeof(num))
// num = String(num)
// console.log(typeof(num))


// let name = 'jack'
// let ship = 'blackpearl'

// let intro = `I\'m ${name} captain of ${ship}.`
// console.log(intro)


// console.log(typeof null)
// give object

// let i=1
// while(i<=19) {
//     console.log(i);
//     i++;
// }






// string methods === immutable

// let a = "                  yasir                ";
// console.log(a.length);
// a = a.trim();
// console.log(a.length)


// let user = 'RoOt';
// console.log(user.toUpperCase());
// console.log(user.toLowerCase());
// console.log('original:',user)


// let a = 'jack sparrow';
// let firstName = a.slice(0,4)
// let lasttName = a.slice(4)
// console.log(firstName)
// console.log(lasttName)





// data types 
// primitive types
// int , string, bool, bigint, undefined, null, symbol

// let age = 11
// let name = 'jack'
// console.log(typeof name, typeof age)




// converting
// let age = 11;
// age = age + '';
// age = String(age)
// console.log(typeof age)

// let a = '11';
// // a = +a;
// a = Number(a)
// console.log(typeof a)




// concatenate
// let fName = 'jack';
// let lName = 'sparrow';
// let fullName = fName + ' ' + lName
// console.log(fullName)
// console.log(fName,lName)

// let a = '1';
// let b = '2';
// let c = a+b; //12
// c = +a + +b //3
// console.log(c)





// template string 
// let user = 'jack';
// let permission = 'read only';

// console.log(`${user} have ${permission} permission.`)


// only for let and var not for const 
// let a;//undefined
// a = 0;
// console.log(typeof a)

// const a;//error


// let a = null;
// console.log(typeof a)//object bug of js (error)


// const a = 123n;
// const b = BigInt(123);
// console.log(typeof a);
// console.log(typeof b);

// console.log(Number.MAX_SAFE_INTEGER)

// cant mix int with big int
// let a = 12n;
// // let b = 3;
// let b = 3n;
// let c = a+b;
// console.log(c)//error




// comparison
// let a = '5';
// let b = 5;

// console.log(a==b);//loose equility - not check data type
// console.log(a===b);//tight equility

// console.log(a!==b)





// if else 
// let age = 18;
// if(age>=18) {
//     console.log('allowed');
// }else {
//     console.log('not allowed')
// }




// truthly falsy values 

// falsy
// ''
// null
// undefined
// 0

// let a = ''; //falsy values 
// let a; //falsy values 
// let a = 0; //falsy values 
// let a = undefined; //falsy values 
// if(a) {
//     console.log(a);
// }else {
//     console.log('a is empty')
// }




// ternary operator
// let age = 18;
// let age = 17;
// console.log(age>=18 ? 'allowed' : 'not allowed')





// AND OR operator

// let age = 18;
// let fullName = 'jack sparrow';
// let mail = 'jack@email.com';

// if(age>=18 && mail.includes('@')) {
//     console.log('Allowed');
// }else {
//     console.log('Not Allowed');
// }


// let age = 18;
// let username = '';
// let mail = 'jack@email.com';

// if(username || mail) {
//     console.log('Allowed');
// }else {
//     console.log('Not Allowed');
// }



// switch

// let day = 0;
// switch(day) {
//     case 0:
//         console.log('mon');
//         break;
//     case 1:
//         console.log('tue');
//         break;
//     case 2:
//         console.log('wed')
//         break
//     case 3:
//         console.log('thur');
//         break;
//     case 4:
//         console.log('fri');
//         break;
//     case 5:
//         console.log('sat');
//         break;
//     case 6:
//         console.log('thur');
//         break;
//     default:
//         console.log('invalid')
// }



// let i = 0;
// while(i <= 10) {
//     console.log(i)
//     if(i == 4) {
//         // break;
//         continue;
//     }

//     i++;
// }