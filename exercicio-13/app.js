/*
  01

  - Adicione apenas uma linha de código dentro da função "getCatInfo" para fazer  
    com que as informações do gato estejam disponíveis fora da função;
  - Abaixo da função "getCatInfo", exiba no console a seguinte mensagem:

  "NOME_DO_GATO é um gato COR_DO_GATO de IDADE_DO_GATO anos."
*/


// 🤔 Atenção essa é a primeira forma de fazer simplificada

// const getCatInfo = () => {
//   const nome = 'Marcos'
//   let age = 3
//   const color = 'Cinza'
//   return {nome: nome, age: age, color: color}
// }
// console.log(`"${getCatInfo().nome} é um gato ${getCatInfo().color} de ${getCatInfo().age} anos."`);


// 👀 🎁🎁🎁 Atençao a forma mais atual e profissional 🤔🤔✔🤔✔🤔

function getCatInfo() {
  const nome = 'Marcos'
  let age = 3
  const color = 'Cinza'
  return {nome, age, color}
}
 const {nome, age, color} = getCatInfo();

console.log(`"${nome} é um gato ${color} de ${age} anos."`);


/*
  02

  - Adicione apenas duas linhas de código dentro da função "external" para  
    exibir no console a string que a const movie armazena, com todas as letras  
    maiúsculas.
*/

const externo = () => {
  const movie = 'Parasite'

  const internal = () => {
    const extraInternal = () => {
      console.log(movie.toUpperCase())
    }
    extraInternal()
  }

  internal()
}

externo()

/*
  03

  - Exiba no console o array abaixo com a ordem dos itens invertida;
  - O resultado exibido deve ser [1, 2, 3];

  Dica: procure pelo método reverse, no MDN.
*/

let randomNumbers = [3, 2, 1]
// console.log( randomNumbers.reverse())

/*
  04

  - Exiba no console o array abaixo com o 1º item removido;

  Dica: procure pelo método shift, no MDN.
*/

let crazyArray = [
  { prop1: '1', prop2: '2' },
  function getMessage () { return 'hi' },
  [ 5, 96, 53  ]
]

let newArray = crazyArray.shift();

// console.log(crazyArray);
// console.log(newArray);

/*
  05

  - Encontre no array abaixo o cão com o nome "Zequinha" e exiba esse objeto  
    no console;

  Dica: procure pelo método find, no MDN.
*/

const dogs = [
  { name: 'Olivia', age: 3, gender: 'Female', breed: 'Maltês' },
  { name: 'Zé', age: 2, gender: 'Male', breed: 'Pug' },
  { name: 'Jade', age: 4, gender: 'Female', breed: 'Shiba inu' },
  { name: 'Zequinha', age: 7, gender: 'Male', breed: 'Poodle' },
  { name: 'Xica', age: 6, gender: 'Female', breed: 'Chihuahua' }
]

  const encontre = dogs.find(item => item.name === 'Zequinha')

  // console.log(encontre);

/*
  06

  - Cole o markup HTML abaixo em seu index.html;
  - Utilize o query selector para obter a referência do título principal da  
    página, através da classe dele;
  - Exiba a referência do título principal no console.

  <section>
    <article>
      <h1 class="main-title">Curiosidades sobre o filme Jurassic Park</h1>

      <ul>
        <li>
          <h2 class="secondary-title">Direto das páginas do livro</h2>
          <p>No livro Parque dos Dinossauros, de Michael Crichton, o personagem John Hammond anuncia orgulhoso que o guia turístico do parque é o ator Richard Kiley, conhecido nos Estados Unidos. No filme, o diretor Steven Spielberg convidou o próprio Kiley para interpretar a si mesmo nesta cena.</p>
        </li>

        <li>
          <h2 class="secondary-title">Passou adiante</h2>
          <p>O ator William Hurt chegou a ser convidado para interpretar o Dr. Alan Grant, mas recusou o papel sem nem mesmo ler o roteiro original do filme.</p>
        </li>

        <li>
          <h2 class="secondary-title">Sistemas operacionais do parque</h2>
          <p>Nos diversos softwares que aparecem em Jurassic Park foram utilizadas várias linguagens. Pode-se notar que um dos programas utilizados no parque foi escrito em Pascal, em um dos monitores percebe-se a utilização do sistema UNIX e a interface gráfica utilizada é a 3D File System Navigator, da Sillicon Graphics.</p>
        </li>
      </ul>
    </article>
  </section>
*/
let titulo = document.querySelector('body > section > article > h1').textContent;
let titulo1 = document.querySelector('.main-title').innerHTML;

console.log(titulo);
// console.log(titulo1);

/*
  07

  - Obtenha um NodeList com as referências de todos os títulos secundários da  
    página, através da classe deles;
  - Exiba esse NodeList no console.
*/

let nodeList = document.querySelectorAll('.secondary-title');
let nodeL = document.querySelectorAll('h2');

console.log(nodeList);

nodeList.forEach(element => {
  // console.log(element);
  // document.write(element.innerHTML) 
})
// console.log(nodeList);