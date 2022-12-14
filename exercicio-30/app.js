/*
  01

  - Usando promises, faça um request para este endpoint:
    https://jsonplaceholder.typicode.com/users
  - Se o request estiver ok, exiba os objetos no console;
  - Se o request não estiver ok, exiba no console "Não foi possível obter os 
    dados dos usuários."
*/
// const getData =()=>{
//     return new Promise((resolve, reject) => {
//       // resolve('Data aqui');
//       reject('erro aqui');
//     })
// }

// getData()
// // .then(value=>console.log(value))
// .catch(erro=>console.log(erro))

const getUser = url => new Promise((resolve, reject) => {
  
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange',()=>{
    const resultadoOK = request.readyState === 4 && request.status === 200;
    const resultadoNoOK = request.readyState === 4;
   if (resultadoOK) {
     const data = JSON.parse(request.responseText);
    resolve(data);
   }
   if (resultadoNoOK) {
   reject('Não foi possivel exibir os dados');
     
   }
  
  })
 
  request.open('Get', url);
  request.send()

})

// getUser('https://jsonplaceholder.typicode.com/users/1')
// .then(user1 => {
//   console.log(user1)
//   return getUser('https://jsonplaceholder.typicode.com/users/2')
// })
// .then(user2 =>{
//   console.log(user2);
//   return getUser('https://jsonplaceholder.typicode.com/users/3')
// })
// .then(user3=>{
//   console.log(user3);
//     return getUser('https://jsonplaceholder.typicode.com/users/')
// })
// .then(console.log)
// .catch(console.log);

/*
  02

  - Crie uma função chamada `calculator`, que funcione assim:
    - A função deve receber um parâmetro que dirá qual operação matemática ela
      vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
  - Essa função deve retornar uma segunda função que deve receber dois 
    parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a 
    mensagem: "Resultado da operação: NUMERO_1 OPERADOR NUMERO_2 = RESULTADO."
  - Se o operador não for válido, retorne a mensagem "Operação inválida."
*/

const calculator = operador => (num1, num2) => {
  const operacao = {
    '+': `Resultado da operação: ${num1} ${operador} ${num2} = ${num1 + num2}.`,
    '-': `Resultado da operação: ${num1} ${operador} ${num2} = ${num1 - num2}.`,
    '*': `Resultado da operação: ${num1} ${operador} ${num2} = ${num1 * num2}.`,
    '/': `Resultado da operação: ${num1} ${operador} ${num2} = ${num1 / num2}.`,
    '%': `Resultado da operação: ${num1} ${operador} ${num2} = ${num1 % num2}.`
  }
  return operacao[operador] || "Operação inválida";
}

const sum = calculator('*');
// console.log(sum(9,5));




/*
  03

  - Crie 2 arrays, `sul` e `sudeste`, que serão as regiões do Brasil. Cada 
    array deve conter os estados dessa região;
  - Crie uma const chamada `brasil`, que irá receber as duas regiões 
    concatenadas. Mostre o `brasil` no console;
  - Adicione 3 novos estados da região Norte no início do array e mostre no 
    console. Pesquise pelo método "unshift" no MDN;
  - Remova o primeiro estado do array `brasil` e mostre-o no console;
  - Crie um novo array chamado `newSul`, que recebe somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
 const sul = ['Paraná','Santa Catarina','Rio Grande do Sul'];
 const sudeste = ['Espito Santo','Minas Gerais','Rio de Janeiro','São Paulo'];
 const brasil = sul.concat(sudeste);

 brasil.unshift('Acre','Amapá', 'Amazonas');
 console.log(brasil);
 brasil.shift();
 console.log(brasil);
 const newSul = brasil.slice(2, 5)
 console.log(newSul);


/*
  04

  - Crie um novo array chamado `nordeste`, que tenha os estados do nordeste;
  - Remova de `brasil` os estados do `sudeste`, colocando-os em uma constante
    chamada `newSudeste`. Pesquise pelo método "splice";
  - Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado;
  - Percorra o array `brasil` e gere um novo array chamado `newBrasil`. Esse 
    array deve ter cada item como um objeto, com as propriedades:
      - `id`: que será o índice do array `brasil`;
      - `estado`: que será o estado do array `brasil`;
  - Percorra o array `brasil` e verifique se os estados tem mais de 7 letras 
    cada, atribuindo o resultado à uma constante. Se tiver, mostre no console a 
    mensagem "Sim, todos os estados tem mais de 7 letras.". Se não, mostre no 
    console: ."Nem todos os estados tem mais de 7 letras". Pesquise pelo método 
    every.
*/
const nordeste = ['maranhão','piauí','ceará','rio grandedo norte','paraiba','pernambuco','alagoas','sergipe']
const newsudeste = brasil.splice(5,8);
console.log(newsudeste);
brasil.splice(3, 0,'maranhão','piauí','ceará','rio grandedo norte','paraiba','pernambuco','alagoas','sergipe')
console.log(brasil);

const newBrasil = brasil.map((estado, index)=>
    ({'id' : index + 1 , 'estado': estado }) 
)

console.log(newBrasil);

const resultadoMaisQ7 = brasil.every(item => item.length > 7 )
const resultado = resultadoMaisQ7
?"Sim, todos os estados tem mais de 7 letras."
:"Nem todos os estados tem mais de 7 letras";

console.log(resultado);

/*
  05

  - Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma constante. Se esse estado existir no array, mostre no 
    console "Ceará está incluído.". Se não, mostre "Ceará não foi incluído =/";
  - Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "ESTADO pertence ao Brasil.";
  - Atribua o novo array a uma constante;
  - Filtre o array criado acima, retornando somente os estados que tiverem ID 
    par. Atribua este novo array à uma constante.
*/
