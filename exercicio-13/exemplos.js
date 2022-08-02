let h1 = document.querySelector('body > h1');

let paragrafos = document.querySelectorAll('p');

let erros = document.querySelectorAll('.error');

// console.log(erros);

// console.log(h1);
// console.log(paragrafos[0]);

paragrafos.forEach(element => {
    // console.log(element);
    document.write(element.innerHTML + '<br><br>')
});