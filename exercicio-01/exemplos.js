const email = 'freitas@gmail.com';

const posicao = email.indexOf('@');
const emailSlice = email.slice(0,posicao);

console.log(posicao);
console.log(emailSlice);