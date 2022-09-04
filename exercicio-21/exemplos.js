
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

// utilizando o metado sort
const nomes = ['adriano','joaquim','kele','isac']
const numeroAleatorios = [55,33,66,87,12,54,25,1,4]

nomes.sort()
numeroAleatorios.sort((num1,num2)=>num1-num2)
console.log(nomes);
console.log(numeroAleatorios);