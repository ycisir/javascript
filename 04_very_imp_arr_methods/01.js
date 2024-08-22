// all methods get callback function
// foreach method - loop

// const nums = [1,2,3,4,5,6,7,8,9,10];
// const getNum = (num, i) => {
//     console.log(num, 'found at index',i);
// }
// nums.forEach(getNum);


// nums.forEach((num) => {
//     console.log(num*3);
// });


// const users = [
//     {'name': 'jack', 'ship':'black pearl'},
//     {'name': 'barbosa', 'ship':'black beard'},
//     {'name': 'davy', 'ship':'Flying Dutchman'},
// ]

// users.forEach((user) => {
//     console.log('Name:', user.name);
//     console.log('Ship:', user.ship);
// })







// map method 

// const nums = [1,2,3,4,5,6,7,8,9,10];
// const sqr = (num) => {
//     return num*num;// imp to return if user map
// }

// const ans = nums.map(sqr);
// console.log(ans);

// anonymous func
// const sqr = nums.map((num, index) => {
//     return num*num;
// })

// console.log(sqr);


// const users = [
//     {'name': 'jack', 'ship':'black pearl'},
//     {'name': 'barbosa', 'ship':'black beard'},
//     {'name': 'davy', 'ship':'Flying Dutchman'},
// ]

// const userNames = users.map((user) => {
//     // console.log(user.name);
//     return user.name;
// })

// console.log(userNames)








// filter method

// const nums = [1,2,3,4,5,6,7,8,9,10];

// const isEven = (n) => {
//     return n%2 === 0;
// }

// const evenNums = nums.filter(isEven);
// console.log(evenNums)

// anonymous func
// const evenNums = nums.filter((n) => {
//     return n%2 === 0;
// })

// const oddNums = nums.filter((n) => {
//     return !(n%2 === 0);
// })

// console.log(evenNums);
// console.log(oddNums);







// reduce method

// const nums = [1,2,3,4,5];
// const sum = nums.reduce((accumulator, currentValue) => {
//     return accumulator+currentValue;
// })

// console.log(sum)

// accumulator,        currentValue,          return
//  1                      2                      3
//  3                      3                      6
//  6                      4                     10
// 10                      5                     15


// const userCart = [
//     {
//         'productId':1, 
//         'productName':'Lenovo Thinpad', 
//         'productPrice':38000
//     },

//     {
//         'productId':2, 
//         'productName':'Dell Latitude', 
//         'productPrice':39000
//     },

//     {
//         'productId':3, 
//         'productName':'Zebronics laptop', 
//         'productPrice':28000
//     },
// ]

// solution
// totalPrice,          currentProduct,             return
// 0                       38000                     38000
// 38000                   39000                     77000
// 77000                   28000                     105000

// const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
//     return totalPrice + currentProduct.productPrice;
// }, 0) // initial value of totalPrice = 0

// console.log(totalAmount);






// sort method

// const arr = [54,3,32,0,12];

// arr.sort() // change original arr
// convert to string and sort using ASCI value 
// ['54','3','32','0','12']
// 0-48, 1-49, 2-50, 3-51, 4-52, 5-53
// [53, 51, 51, 48, 49]
// [48, 49, 51, 51, 53]

// real ans - [0, 12, 3, 32, 54]
// console.log(arr)


// const users = ['jack', 'barbosa', 'ron', 'harry', 'Hermoine'];// prefer capital first due to low ASCI value
// users.sort();
// console.log(users)



// solve 
// const arr = [54,3,32,0,12];
// arr.sort((a,b) => {
//     return a-b;
// })

// arr.sort((a,b)=>a-b); // same as above
// console.log(arr)

// a = 54, b = 3 ---> a-b = 49 so a-b > 0 --- b,a
// 3,54
// for negative --- a,b 


// for descending
// return b-a;


// const products = [
//     {
//         'productId':1, 
//         'productName':'Lenovo Thinpad', 
//         'productPrice':38000
//     },

//     {
//         'productId':2, 
//         'productName':'Dell Latitude', 
//         'productPrice':39000
//     },

//     {
//         'productId':3, 
//         'productName':'Zebronics laptop', 
//         'productPrice':28000
//     },
// ]

// low to high --- use slice to cant change original products
// const lowToHight = products.slice(0).sort((a,b)=> {
//     return a.productPrice - b.productPrice;
// })

// console.log(lowToHight)


// hight to low 
// const hightToLow = products.slice(0).sort((a,b)=> {
//     return b.productPrice - a.productPrice;
// })

// console.log(hightToLow) 







// find method 
// return only first occurence
// const users = [
//     {'userId':1, 'userName':'jack'},
//     {'userId':2, 'userName':'harry'},
//     {'userId':3, 'userName':'ron'},
// ]

// const user = users.find((user) => {
//     return user.userId === 3;
// })

// console.log(user);






// every method 
// const nums = [2,3,45,6,99];

// check if every numbers is even give true else false  
// const isEvenArr = nums.every((n) => {
//     return n%2 === 0;
// })

// console.log(isEvenArr)


// const userCart = [
//     {
//         'productId':1, 
//         'productName':'Lenovo Thinpad', 
//         'productPrice':38000
//     },

//     {
//         'productId':2, 
//         'productName':'Dell Latitude', 
//         'productPrice':39000
//     },

//     {
//         'productId':3, 
//         'productName':'Zebronics laptop', 
//         'productPrice':28000
//     },
// ]

// const ans = userCart.every((item) => {
//     return item.productPrice < 40000;
// })

// console.log(ans)







// some method 
// one of any num is even then return true
// const nums = [2,3,45,6,99];
// const isNumEven = nums.some((n) => {
//     return n%2 === 0;
// })

// console.log(isNumEven)


// const userCart = [
//     {
//         'productId':1, 
//         'productName':'Lenovo Thinpad', 
//         'productPrice':38000
//     },

//     {
//         'productId':2, 
//         'productName':'Dell Latitude', 
//         'productPrice':39000
//     },

//     {
//         'productId':3, 
//         'productName':'Zebronics laptop', 
//         'productPrice':28000
//     },
// ]

// const ans = userCart.some((item) => {
//     return item.productPrice > 38000;
// })

// console.log(ans)









// fill method 
// const zeros = new Array(10).fill(0)
// console.log(zeros)

// const arr = [1,3,5,6,7,2];
// arr.fill(-1, 3, 6);
// console.log(arr)








// splice method 
// start, delete, insert  
// const arr = ['item1', 'item2', 'item3'];
// const deletedItem = arr.splice(1,1);//delete index 1 item
// console.log(arr)
// console.log(deletedItem)

// arr.splice(1,0,'new item');
// console.log(arr);

// const deleted = arr.splice(1,1,'item2')
// console.log(deleted)
// console.log(arr)