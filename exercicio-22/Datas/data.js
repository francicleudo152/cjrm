const hoje = new Date();

console.log(hoje);
console.log('ano:', hoje.getUTCFullYear());
console.log('mês:', hoje.getMonth());
console.log('dia do mes:', hoje.getDate());
console.log('dia da semana:', hoje.getDay());
console.log('hora:', hoje.getHours());
console.log('minutos:', hoje.getMinutes());
console.log('segundos:', hoje.getSeconds());
console.log('milisegundos:', hoje.getMilliseconds());

console.log('timestamp;', hoje.getTime());
console.log('Converter Data para Strig;', hoje.toDateString());
console.log('Converter Time para Strig;', hoje.toTimeString());
console.log('Converter Local para Strig;', hoje.toLocaleString());

//---------------Comparaçôes de Datas-----------------------------------------------------------------

const DataEspecifica = new Date('May 9 1979 7:00:00');

console.log('Wed Dec 31 1969 21:00:00 :', hoje.getTime(),', data a ser comparada 09/05/1979:', DataEspecifica.getTime());

const diferenca = hoje.getTime() - DataEspecifica.getTime();
console.log({diferenca});

const segundos = Math.round(diferenca / 1000);
console.log({segundos});
const minutos = Math.round(segundos / 60);
console.log({minutos});
const horas = Math.round(minutos / 60);
console.log({horas});
const dias = Math.round(horas / 24);
console.log({dias});
const anos = Math.round(dias / 365);
console.log({anos});

console.log(`Dias ${dias} dias de vida`);

const converterTime = 0;

console.log(new Date(converterTime));
// const segundos = Math.round(diferenca / 1000);
// console.log({segundos});
// const segundos = Math.round(diferenca / 1000);
// console.log({segundos});