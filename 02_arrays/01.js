// array is a reference type 

// const arr = ['test', 'test2', 'test3'];
// console.log(typeof arr);
// console.log(Array.isArray(arr));
// const obj = {} // object literal






// push pop 

// const arr = ['test', 'test2', 'test3'];
// arr.push('test4');
// console.log(arr)

// arr.pop();
// console.log(arr)






// shift unshift --- performance issue

// const arr = ['test', 'test2', 'test3'];
// arr.shift(); // remove first element
// console.log(arr)

// arr.unshift('test1') // add element at first
// console.log(arr)







// primitive vs reference data type 

// const arr = ['test1', 'test2'];
// const arr2 = arr;

// console.log('arr',arr);
// console.log('arr2',arr2);
// arr.push('test3');

// console.log('arr',arr);
// console.log('arr2',arr2);







// cloning 

// slice method
// const arr = ['item1', 'item2'];
// const arr2 = arr.slice(0); // clone arr
// const arr2 = arr.slice(0).concat('item3'); // adding more item to arr2

// console.log('arr',arr);
// console.log('arr2',arr2);
// arr.push('item4');

// console.log('arr',arr);
// console.log('arr2',arr2);


// spread
// const arr = ['item1', 'item2'];
// const arr2 = [...arr, 'item3']; // adding more item to arr2
// console.log('arr',arr);
// console.log('arr2',arr2);
// arr.push('item4');

// console.log('arr',arr);
// console.log('arr2',arr2);








// for loop
// const arr = ['item1', 'item2', 'item3'];

// use mostly
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// console.log('arr',arr);


// use mostly
// for of loop --- best for getting item
// let arr2 = [];
// for(let i of arr){
//     arr2.push(i);
// }

// console.log('arr2',arr2);


// for in loop --- best for index
// for(let i in arr) {
//     console.log(arr[i]);
// }






// while loop

// const arr = ['item1', 'item2', 'item3'];
// let i = 0;
// while(i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }









// array destructuring

// const names = ['jack', 'barbosa', 'harry', 'hermoine']

// const [jack, barbosa, ...newNames] = names;
// console.log(jack)
// console.log(barbosa)

// console.log(newNames)








// object literals
// best for real world data 
// key - value 

// const person = {
//     'name':'jack', 
//     'age':11,
//     'hobbies': ['h1', 'h2']
// }
// console.log('name:',person.name, typeof person.name)

// person.gender = null; // adding
// console.log(person)








// dot vs bracket notation

// const person = {
//     'name':'jack', 
//     'age':11,
//     'hobbies': ['h1', 'h2']
// }
// person.something else = ['abc', 'def'] // error

// const key = 'mail';
// person[key] = 'jack@email.com';
// console.log(person.mail)
// console.log(person['mail']);

// for(let i in person){
//     console.log(person[i])
// }

// for(let i in person){
//     console.log(key,':', person[i])
// }

// console.log(Object.keys(person));
// for(let i of Object.keys(person)) {
//     console.log(i,':', person[i]);
// }









// computed properties

// const k1 = 'objkey1';
// const k2 = 'objkey2';

// const v1 = 'val1';
// const v2 = 'val2';

// const obj = {
//     [k1]: v1,
//     [k2]: v2
// }
// console.log(obj)


// const obj = {};
// obj[k1] = v1;
// obj[k2] = v2;
// console.log(obj)








// spread operator 

// const person = {
//     'name':'jack', 
//     'age':11,
//     'hobbies': ['h1', 'h2']
// }

// const personCopy = {...person}
// console.log(personCopy)

// const obj = {..."abc"}; // 0:'a', 1:'b', 3:'c'
// const obj2 = {..."123"}; // same as above
// console.log(obj); 
// console.log(obj2);








// Object destructuring 

// const person = {
//     'name':'jack', 
//     'age':11,
//     'hobbies': ['h1', 'h2']
// }

// const {name, age, ...restProps} = person;
// console.log('name:',name);
// console.log('age:',age);
// console.log('others:',restProps);








// object inside array 
// mostly use in real-wordl 

const users = [
    {
        'name':'jack',
        'ship':'black pearl'
    },

    {
        'name':'barbosa',
        'ship':'black beard'
    },

    {
        'name':'davy',
        'ship':'flying dutchman'
    },
]


// nested destructuring 

// const [{name}] = users;
// console.log(name);

const userNames = users.map( (user)=> {
    return user.name;
})

console.log(userNames)