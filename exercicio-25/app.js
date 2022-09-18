/*
  01

  - Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do 
    array "months".
*/

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Fevereiro',
  'Dezembro'
]

const fevereiro = months.findIndex(item => item === 'Fevereiro')
console.log(fevereiro);

/*
  02

  - Crie um objeto de data que represente o momento presente;
  - Exiba o objeto no console.
*/

const presente = new Date();
console.log(presente.toLocaleString());
console.log(presente);


/*
  03

  - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
*/

console.log(presente.getFullYear());

/*
  04

  - Crie um objeto de data que represente um momento passado;
  - Exiba o objeto no console.
*/
const passado = new Date('August 15 2021 20:16:57')
console.log(passado);

/*
  05

  - Exiba, no console, a hora do objeto que você acabou de criar.
*/

console.log(passado.getHours());

/*
  06

  - Crie um objeto de data que represente um momento futuro;
  - Exiba o objeto no console.
*/

const futuro = new Date('May 09 2030 18:16:57')
console.log(futuro);

/*
  07

  - Exiba no console a quantidade de dias entre o momento futuro e o passado.
*/

const quantidadeDias = futuro.getTime() - passado.getTime();
// console.log(Math.round(quantidadeDias / 86400000));
console.log(Math.round(quantidadeDias / 1000 / 60 / 60 / 24));

/*
  08
  
  Assim como a 1ª aplicação que implementamos (Quiz), considere fazer 
  da aplicação To-do List uma peça do seu portfólio.

  Desenvolva a sua versão do To-do List e, se você sentir que a desenvolveu 
  por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  Você pode hospedá-la no Netlify seguindo o mesmo tutorial que recomendei na 
  aplicação do Quiz: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
