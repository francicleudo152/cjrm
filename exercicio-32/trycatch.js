// try {
//     console.log(oi);
// } catch (error) {
//     console.log(error.name, error.message);
//   if (error.name === 'ReferenceError' && error.message === 'oi is not defined') {
//     const oi = 'const criada';
//     console.log(oi);
//   }  
// }
// console.log('oi');



// const getUsers = async () => {
// await fetch('https://jsonplaceholder.typicode.com/users');
//   return await response.json();
// }
// const logUser = async()=>{
//   const users = await getUsers()
//   console.log(users);
// }
// logUser()

const getUsers = async () => {
  try {
    const response = await fetch('/requeste/apipokemon.json')
    if (!response.ok) {
      throw new Error('Não foi possivel obter os dados');
    }
    return response.json()

  } catch (error) {
    console.log(error.message);
  }
}
  const logUser = async()=>{
    const users = await getUsers()
    console.log(users);
  }
  logUser()