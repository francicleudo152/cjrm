
const username = 'francicleudo';
const padrao = /^[a-z0-9]{6,}$/;
// const padrao = /^.{6,}$/;
const isMatch = padrao.test(username)

const resultado = username.search(padrao)
console.log(resultado);

if (isMatch) {
  console.log('O teste do regex passou =)');
} else {
  console.log('O teste do regex não passou =(');
  
}
