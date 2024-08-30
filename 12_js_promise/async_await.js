// async await 

console.log('script start');

const URL = 'https://jsonplaceholder.typicode.com/posts';

// normal function 

// async function getPosts() {
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error('something went wrong');
//     }
//     const data = await response.json();
//     return data;
// }


const getPosts = async() => {
    const response = await fetch(URL);
    
    if(!response.ok){
        throw new Error('something went wrong');
    }
    
    const data = await response.json();
    return data;
}


getPosts().then((posts)=>{
    console.log('then block');
    console.log(posts);
}).catch((error)=>{
    console.log('catch block');
    console.log(error)
})

console.log('script end');