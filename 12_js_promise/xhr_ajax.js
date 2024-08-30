// AJAX 
// asynchronous javascript and XML 

// web application can send and retrive data from a server 
// asynchronously (in the background) without interfering with the display and behaviour
// of the existing page 




// now a days XML format not uses anymore
// JSON use a lot 



// 3 most common ways to create and send request to server 
// 1- XMLHttpRequest (old)
// 2- fetch api (new) 
// 3- axios (3rd party)











// const URL = 'https://jsonplaceholder.typicode.com/posts'
// const xhr = new XMLHttpRequest();
// console.log(xhr);

// console.log(xhr.readyState);
// xhr.open('GET',URL);
// // console.log(xhr.readyState);
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(data);
//     }
// }
// xhr.send();













// less code 
// xhr.open('GET',URL);

// xhr.onload = function(){
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
// }
// xhr.send();














// error handling 

// const URL = 'https://jsonplaceholder.typicode.com/posts';
// const xhr = new XMLHttpRequest();

// xhr.open('GET',URL);

// xhr.onload = ()=> {
//     if(xhr.status >= 200 && xhr.status <= 300){
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//     }else {
//         console.log('something wrong');
//     }
// }
// xhr.onerror = ()=> {
//     console.log('network error');
// }

// xhr.send();
















// using Promise 

const URL = 'https://jsonplaceholder.typicode.com/posts';

function sendRequest(method, url) {
    return new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function(){
        
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            }else {
                reject(new Error('something went wrong'));
            }
        }

        xhr.onerror = ()=> {
            reject(new Error('network error'));
        }
        xhr.send();
    })
}

sendRequest('GET', URL).then((posts)=>{
    const data = JSON.parse(posts);
    // console.log(data);
    return data;
}).then((data)=>{
    const id = data[3].id;
    return id;
}).then((id)=>{
    const url = `${URL}/${id}`;
    return sendRequest('GET', url);
}).then((post)=>{
    const data = JSON.parse(post);
    console.log(data.body);
}).catch(err=>{
    console.log(err);
})