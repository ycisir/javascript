// const arr = ['test', 'test2', 'test3']

// getting item direct
// for(let i of arr){
//     console.log(i)
// }
// console.log('-----------')
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }


// array destructing
// const names = ['jack', 'barbosa', 'harry', 'hermoine']
// console.log(names)
// const jack = names[0]
// console.log(jack)
// const [jack, barbosa, ...newNames] = names;
// console.log(jack)
// console.log(barbosa)

// console.log(newNames)


//objects
// const key = 'email'
// const person = {
//     'name':'test', 
//     age:11,
//     hobbies: ['h1', 'h2']
// }
// console.log('name of person:',person.name, typeof person.name)
// console.log('age of person',person.age,  typeof person.age)
// console.log('hobbies of person',person.hobbies,  typeof person.hobbies)
// person.gender = null
// dot vs bracket notation
// person["something else"] = ['abc', 'def']
// person.something else = ['abc', 'def'] // error
// console.log(person)

// person[key] = 'abc@email.com'
// console.log(person)


// for(let key in person){
//     console.log(person[key])
// }

// console.log('------')

// for(let key in person){
//     console.log(key,':', person[key])
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

// const obj = {};
// obj[k1] = v1;
// obj[k2] = v2;

// console.log(obj)


function solve(){
    let a = +document.getElementById('val1').value
    let op = document.getElementById('operator').value
    let b = +document.getElementById('val2').value
    let ans = 0;

    switch(op){
        case '+': {
            ans = a+b;
            break
        }

        case '-': {
            ans = a-b;
        }

    }

    return ans;
}

console.log(solve())

// let res = document.getElementById('res').value
// res+=res