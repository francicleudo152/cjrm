/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/

const hoje = new Date();
// console.log(hoje);
// console.log(dateFns.isToday(hoje));
// console.log(dateFns.format(hoje, 'DD/MM/YYYY'));

const formatTime = unid => String(unid).length === 1 ? `0${unid}` : unid;

const format = date => {
  const dia = date.getDate();
  const mes = date.getMonth() + 1;
  const ano = date.getFullYear();

  return `${formatTime(dia)}/${formatTime(mes)}/${ano}`;

}

console.log(format(hoje));



/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/
const formatacaoBrasil = hoje => {
const hora = hoje.getHours();
const minutos = hoje.getMinutes();
const semana = hoje.getDay();
const dias = hoje.getDate();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();
const diasSemanas = ['domingo','segunga-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outobro','setembro','novembro','dezembro'];
return `${formatTime(hora)} : ${formatTime(minutos)} - ${diasSemanas[semana]}, ${formatTime(dias)} de ${(meses[mes])} de ${ano} `;

}

console.log(formatacaoBrasil(hoje));

/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true }
const {id, isVerified } = user;

console.log(user);
console.log(id, isVerified);


/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000' }

const {name: nameA} = robotA;
const {name: nameB} = robotB;

console.log(nameA, nameB);


/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = 'a'
const b = 'b'
const c = 'c'

const alfabeto = {a , b , c};
console.log(alfabeto);

/*
  06

  - Refatore o código abaixo.
*/

const useDataSomewhereElse = value => {
  console.log(value)
}

const updateSomething = ({target, property, willChange} = {}) => {
 
  if (willChange === 'valor indesejado') {
    willChange = 'valor desejado'
  }

  useDataSomewhereElse({
    target: target,
    property: property,
    willChange: willChange
  })
}

updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })
// updateSomething({ 1, 2, 'valor indesejado' })

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  clockContainer.innerHTML = `
    <span>${formatTime(hours)}</span> :
    <span>${formatTime(minutes)}</span> :
    <span>${formatTime(seconds)}</span> 
    `
}

setInterval(updateClock, 1000)
