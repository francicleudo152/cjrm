/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/
let cat = {
  nome: 'Nina',
  idade: 7,
  cor: 'preto',
  melhoresAmigos:['pretinha','pietra','magrela','sara','kele'],
  som: function(){
    return 'miau';
  }
}

console.log(cat);

/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X",
   "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X",
    e "sound", que recebeu uma função que retorna "X".
*/

console.log(` Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu ${cat.nome},
"age", que recebeu ${cat.idade}, "color", que recebeu ${cat.cor}, "bestFriends", que recebeu um array com os itens ${String(cat.melhoresAmigos.join(', ')).replace(', k', ' e k')},
 e "sound", que recebeu uma função que retorna ${cat.som()}.`)

/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/

let idadeatual = cat.idade + 2
console.log(idadeatual);

/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/
let addAmigo = (amigo)=>cat.melhoresAmigos.push(amigo);

addAmigo('Fran')

console.log(cat.melhoresAmigos);

/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/
  let alterarCor = object => {
    object['cor'] += ' e cinza';
  }

  alterarCor(cat)

  console.log(cat.cor);
  
  // let alterarCor = (cor)=>cat['cor'] = cor;

  // alterarCor('castanho')

  // console.log(cat.cor);
/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/
    const isObjecto = (check) => typeof check === 'object' ;

    console.log(isObjecto(cat));

/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/
    let dog = {
      nome: 'pretinha',
      idade: 12,
      cor: 'caramelo',
      melhoresAmigos:['pietra','magrela','sara','kele'],
      som: function(){
        return 'au au';
      }
    }

    let idadetotal = cat.idade + dog.idade

    console.log(` "A soma das idades de ${cat.nome} e ${dog.nome} é ${idadetotal}."`);

/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/

 let SUV = ['Honda HR-V','Jeep Renegade','Ford EcoSport','Hyundai iX35']
 const isAnSUV =  car => SUV.includes(car);

// const isAnSUV = car => {
//   if (car === 'Honda HR-V' || car === 'Jeep Renegade' || car === 'Ford EcoSport' || car === 'Hyundai iX35') {
//     return true
//   }
//   return false
// }

console.log(isAnSUV('Honda Civic'))
console.log(isAnSUV('Ford EcoSport'))
console.log(isAnSUV('Hyundai iX35'))
console.log(isAnSUV('Hyundai hb20'))

/*
  09

  - Crie uma função que recebe um parâmetro 'type';
  - Dentro da função, crie um objeto com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
  - Se o valor que o parâmetro type receber corresponder à alguma das 3  
    propriedades, retorne a mensagem que a propriedade armazena;
  - Teste a função, exibindo no console a mensagem de cada propriedade.
*/
