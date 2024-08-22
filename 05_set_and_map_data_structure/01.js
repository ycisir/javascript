// iterables 
// strings , array 
// where we apply for of loop 

// const firstName = 'jack';

// for(let char of firstName) {
//     console.log(char)
// }

// const arr = ['item1', 'item2', 'item3'];

// for(let item of arr) {
//     console.log(item)
// }








// array like objects 
// string 
// whose index we can access 

// const firstName = 'jack';
// console.log(firstName.length);
// console.log(firstName[1])










// sets 
// store data 
// it is iterable
// set also have its own methods
// no indexed base access 
// order is not guarenteed
// unique items only no duplicates allow

// const nums = new Set([1,1,2,3]);
// console.log(nums)
// console.log(nums[1]) // undefined

// const arr = [1,2,3,'item']
// const nums = new Set();
// nums.add(1);
// nums.add(arr);
// nums.add(arr); // not add
// nums.add(['items']); // added
// nums.add(['items']); // also addes bcz both have diff memory locatn
// console.log(nums);

// console.log(nums.has(1) ? 'present':'not present');

// usable for creating unique values like Ids 
// const nums = new Set();
// nums.add(1);
// nums.add(2);
// nums.add(5);
// nums.add(3);
// nums.add(4);
// nums.add(5);
// nums.add(['nine']);

// for(let n of nums) {
//     console.log(n);
// }


// const arr = [1,1,1,2,44,5,5,5,9,5,9];
// const uniqueVal = new Set(arr);
// console.log(uniqueVal)

// let len = 0;
// for(let i of uniqueVal) {
//     len++;
// }
// console.log(len)











// Maps
// it is iterable

// store data in ordered fashion

// store key value pair in object 
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol as key 

// in maps we can use anything as a key like array, string and numbers 

// const person = new Map();
// person.set('name','jack');
// person.set('age',11);
// person.set('grade',10);
// console.log('name:',person.get('name'));
// console.log(person.keys())

// for(let key of person.keys()) {
    // console.log(typeof key);
    // console.log(person.get(key));
    // console.log(key);
    // console.log(key,':',person.get(key));
// }


// for(let [key, value] of person) {
//     console.log(key,':',value)
// }


// const person1 = {
//     id:1,
//     name: 'jack'
// }

// const extraInfo = new Map();
// extraInfo.set(person1, {age:22, gender:'male'});
// console.log(person1.id);
// console.log(extraInfo.get(person1).age);
// console.log(extraInfo.get(person1).gender);








// cloning using Object.assign

// const obj1 = {
//     key1:'value1',
//     key2:'value2',
// }

// const obj2 = {...obj1} // cloning using spread operator
// const obj2 = Object.assign({}, obj1) // cloning using object.assign










// optional chaining 

const user = {
    'fName':'jack',
    // 'address': {'houseNum':'1234'} // if it comment give below error
}

console.log(user.fName);
console.log(user.address); // undefined
// console.log(user.address.houseNum); // error
console.log(user.address?.houseNum); // undefined