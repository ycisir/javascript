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

// __proto__, [[prototype]] // same --- object
// prototype different from above two --- referencing

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











// function will also treated as object 
// function gives prototype
// only function provide prototype 
// function hello() {
//     console.log('hello');
// }
// console.log(hello.prototype); // free/empty object {}


// name property 
// console.log(hello.name) // gives function name


// adding our own properties 
// like key , value 
// hello.myKey = 'unique value';
// console.log(hello.myKey);










// adding our method to prototype

// function createUser(name, age, email) {
//     const user = Object.create(createUser.prototype);
//     user.name = name;
//     user.age = age;
//     user.email = email;
//     return user;
// }

// createUser.prototype.info = function() {
//     console.log('name:',this.name);
//     console.log('age:',this.age);
//     console.log('email:',this.email);
// }

// createUser.prototype.check = function () {
//     return this.age > 18;
// }

// const jack = createUser('jack sparrow', 27, 'jack@bp.ship');
// console.log(jack)

// const barbosa = createUser('hector barbosa', 44, 'barbosa@bb.ship');
// console.log(barbosa)



// if(jack.check()) {
//     jack.info();
// }else {
//     console.log('Not allowed!')
// }
// console.log('-----------------------')
// if(barbosa.check()) {
//     barbosa.info();
// }else {
//     console.log('Not allowed!')
// }













// new keyword --- constructor
// working 
// 1- create empty obj = {}
// 2- return this - {}
// 3- creatig relation like this 'Object.create()'
// this not required here


// same as class
// function CreateUser(name, email) {
//     this.name = name;
//     this.email = email;
// }

// CreateUser.prototype.info = function() {
//     console.log('name:',this.name);
//     console.log('email:',this.email);
// }

// CreateUser.prototype.check = function () {
//     return this.email.includes('@');
// }

// const jack = new CreateUser('jack sparrow', 27, 'jack@bp.ship');
// console.log(jack)

// if(jack.check()) {
//     jack.info();
// }else {
//     console.log('Provide proper email')
// }

// if(barbosa.check()) {
//     jack.info();
// }else {
//     console.log('Provide proper email')
// }

// for(let key in jack) {
//     // console.log(key) // with prototype
//     if(jack.hasOwnProperty(key)) {
//         console.log(key) // only get 'CreateUser' key
//     }
// }









// class 
// classes are fake in javascript 

// class CreateUser {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     info() {
//         console.log('name:',this.name);
//         console.log('email:',this.email);
//     }
// }

// class SuperUser extends CreateUser {
//     constructor(name, email, perm) {
//         super(name, email);
//         this.perm = perm;
//     }
//     isRoot() {
//         return true;
//     }
//     permissions() {
//         console.log(this.name, 'have', this.perm,'permission');
//     }
// }

// class NormalUser extends CreateUser {
//     constructor(name, email, perm) {
//         super(name, email);
//         this.perm = perm;
//     }
//     isRoot() {
//         return false;
//     }

//     permissions() {
//         console.log(this.name, 'have', this.perm,'permission');
//     }
// }

// const jack = new SuperUser('jack sparrow', 'jack@bp.ship', 'crud');
// const barbosa = new NormalUser('hector barbosa', 'barbosa@bb.ship', 'read-only');

// if(barbosa.isRoot()) {
//     barbosa.info();
//     barbosa.permissions();
// }else {
//     console.log('you\'re not a root');
// }













// getter and setter 

// class CreateUser {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     // static method 
//     static priv() {
//         console.log('alert private area cant access by objects');
//     }

//     static priva = 'static property'

//     get getinfo() {
//         console.log('name:',this.name);
//         console.log('email:',this.email);
//     }

//     set setInfo(user) {
//         const [name, email] = user;
//         this.name = name;
//         this.email = email;
//     }
// }

// const jack = new CreateUser();
// jack.setInfo = ['jack sparrow', 'jack@bp.ship'];
// jack.getinfo;
// jack.priv(); // error
// CreateUser.priv();