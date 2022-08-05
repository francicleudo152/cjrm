const artigo = document.querySelector('article');

// console.log(Array.from(artigo.children));
// console.log(artigo.children);

const filhosEmArray = Array.from(artigo.children);

const filhos = filho => {
    filho.classList.add('artigo-filhos')
};

filhosEmArray.forEach(filhos);

const h2 = document.querySelector('h2');

console.log(h2.parentElement);

console.log(h2.parentElement.parentElement);

console.log(h2.nextElementSibling);

console.log(h2.previousElementSibling);
