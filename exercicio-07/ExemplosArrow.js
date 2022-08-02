
// sayHi();
// showFood();

// const showFood = function(){
//   console.log('pizza')
// }

// function sayHi(){
//   console.log('oi');
// }
// const myfunc = function(name='',sobrenome=''){
//   console.log(`oi, ${name} ${sobrenome}!`);
// }

// myfunc('Fran','Freitas')
// myfunc('Kele','Lira')
// myfunc('Sara','Freitas')

// const double = function (number){
//   const doubloResult = number * 2;
//   console.log(doubloResult)
// }

// const double = (number) =>{
//   return number * 2
// }

const double = number => number * 2

const x = double(9)

// console.log(x)

const myfunc = callback => {
    const value = 77
    callback(value)
}

// myfunc(number => console.log(number))


// função de callback
// quando uma função recebe outra função como argumento.

function myDisplayer(some) {
    // document.getElementById("demo").innerHTML = some;
    // console.log(some);
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  myDisplayer(result);


  //___________________________________________________
    let sum = 0;
    
    function myFunction(item) {
        sum += item;
    }
    const numbers = [65, 44, 12, 4];
    numbers.forEach(myFunction);

    console.log(sum);

    //__________________________________________________________

    numbers.forEach(()=>{
        // console.log('ola!')
    })

    numbers.forEach((item, index, array)=>{
        // console.log(item, index, array );
    })



 //__________________________________________________________
    const inforArray = (item, index, array)=>{
        // console.log(item, index, array );
    }

    numbers.forEach(inforArray);
  //__________________________________________________________

