
const myfunc = callback => {
    const value = 77;
    callback(value)
}
  
myfunc(numero => {
    console.log(numero);
})

const numeros = [1,2,3]

// Utilizado forEach para retornar um novo array com dobro de cada item do array
const paraCada = [];

const dubroforEach = numeros.forEach((item)=> {
    paraCada.push(item * 2);
});
console.log(paraCada);
// -------------------------------------------------------------------------------

// Utilizado map para retornar um novo array com dobro de cada item do array
const dubromap = numeros.map((item)=> item * 2 );

console.log(dubromap);

// utilizando o metado reduce
const somaNumeros = numeros.reduce((acumulador,item)=>{
    return acumulador + item
},0)

console.log(somaNumeros);