const div = document.querySelector('.pessoas')

console.log(div);

const pessoas = ['fran','kele','sara'];

pessoas.forEach((pessoa)=>{
    div.innerHTML += `<h2>${pessoa}</h2>`;
})