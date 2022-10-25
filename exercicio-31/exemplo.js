// fetch('https://jsonplaceholder.typicode.com/userse')
//     .then(response => {
//         console.log('Response', response);
//         return response.json()
//     })
//     .then(users=>console.log(users))
//     .catch(error => console.log(error))



// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=>{console.log('Resposta',response);
//         return response.json()
//     })
//     .then((users)=>{console.log(users);
//     })
//     .catch(console.log)
// console.log(getUsers());




const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
}
const logUser = async()=>{
    const users = await getUsers()
    console.log(users);
}
logUser()