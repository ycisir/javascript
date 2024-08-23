// methods 
// function inside object 

// const person = {
//     'fName': 'jack',
//     'ship': 'black pearl',
//     about: function() {
//         console.log(`${this.fName} have ${this.ship}`);
//     }
// }
// person.about();



// function personInfo() {
//     console.log(`${this.fName} have ${this.ship}`);
// }
// const person1 = {
//     'fName': 'jack',
//     'ship': 'black pearl',
//     about: personInfo
// }

// const person2 = {
//     'fName': 'barbosa',
//     'ship': 'black beard',
//     about: personInfo
// }

// const person3 = {
//     'fName': 'davy',
//     'ship': 'flying dutchman',
//     about: personInfo
// }

// person1.about();
// person2.about();
// person3.about();









// call , apply , bind

// call 
// const person1 = {
//     'fName': 'jack',
//     'ship': 'black pearl',
//     about: function personInfo(area) {
//             console.log(`${this.fName} have ${this.ship} covered ${area}`);
//         }
// }

// calling person1 function for person2 info 
// person1.about.call(person2, 'Asia oceana');
// person1.about.call(); // undefined
// person1.about();



// function about(area) {
//     console.log(`${this.fName} have ${this.ship} covered ${area}`);
// }
// const person1 = {
//     'fName': 'jack',
//     'ship': 'black pearl',
// }

// const person2 = {
//     'fName': 'barbosa',
//     'ship': 'black beard',
// }

// // about.call(person1);
// about.call(person1, 'Asia oceana');



// apply 
// function about(area, others) {
//     console.log(`${this.fName} have ${this.ship} covered ${area}`);
// }
// const person1 = {
//     'fName': 'jack',
//     'ship': 'black pearl',
// }

// const person2 = {
//     'fName': 'barbosa',
//     'ship': 'black beard',
// }

// // about.call(person1);
// about.apply(person1, ['Asia oceana','others']);


// bind 
// function about(area) {
//     console.log(`${this.fName} have ${this.ship} covered ${area}`);
// }
// const person1 = {
//     'fName': 'jack',
//     'ship': 'black pearl',
// }

// const person2 = {
//     'fName': 'barbosa',
//     'ship': 'black beard',
// }

// const fun = about.bind(person1, ['Asia oceana']);
// fun(); // we will store it in function and we can also use it later








// dont do this mistake 

// const person1 = {
//     'fName': 'jack',
//     'ship': 'black pearl',
//     about: function personInfo() {
//         // console.log(this) // represent window
//         console.log(`${this.fName} have ${this.ship}`);
//     }
// }

// // const fun = person1.about; // this mistake
// const fun = person1.about.bind(person1); // solutions
// fun(); // undefined









// arrow function 
// arrow function doesn't have this
// use from surround
// cant change this 

// const person1 = {
//     'fName': 'jack',
//     'ship': 'black pearl',
//     about:  () => {
//         console.log(`${this.fName} have ${this.ship}`);
//     }
// }

// person1.about();









// same as above 

// const person1 = {
//     'fName': 'jack',
//     'ship': 'black pearl',
//     about() {
//         console.log(`${this.fName} have ${this.ship}`);
//     }
// }

// person1.about();














// creating user 

// __proto__, [[prototype]] // same
// prototype different from above two

// const obj1 = {
//     'key1':'value1',
//     'key2':'value2',
// }


// create empty obj but also refrencing with obj1
// const obj2 = Object.create(obj1);
// console.log(obj2)
// obj2.key3 = 'value3';
// console.log(obj2.key2)



// dont repeat yourself

// const dry = {
//     info : function() {
//         console.log('name:',this.name);
//         console.log('age:',this.age);
//         console.log('email:',this.email);
//     },
//     check : function () {
//         return this.age > 18;
//     }
// }

// function createUser(name, age, email) {
//     const user = Object.create(dry);
//     user.name = name;
//     user.age = age;
//     user.email = email;
//     return user;
// }


// const jack = createUser('jack sparrow', 27, 'jack@bp.ship');
// console.log(jack)


// if(jack.check()) {
//     jack.info();
// }else {
//     console.log('Not allowed!')
// }
