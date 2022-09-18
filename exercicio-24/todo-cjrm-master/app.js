
const form = document.querySelector('.form-add-todo');
const ul = document.querySelector('.todos-container');
const buscar = document.querySelector('.form-search input');


// const form = document.forms[1];

form.addEventListener('submit', event=>{
    event.preventDefault();
    const valorInput = event.target.add.value.trim();
    if (valorInput.length) {
        ul.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${valorInput}">
        <span>${valorInput}</span>
        <i class="far fa-trash-alt delete" data-trash="${valorInput}"></i>
      </li>
      `  
      event.target.reset();
    //   console.log(event.target);
    }

});

ul.addEventListener('click', event => {
    const elementoClicado = event.target;
    const trashDatavalue = elementoClicado.dataset.trash;
    console.log();
    if (trashDatavalue) {
        document.querySelector(`[data-todo="${trashDatavalue}"]`).remove();
    }
})

buscar.addEventListener('input', event => {
    const buscarValor = event.target.value.trim().toLowerCase();
    Array.from(ul.children).filter(todo => {
        return !todo.textContent.toLowerCase().includes(buscarValor);
    }).forEach((todo) => {
        todo.classList.remove('d-flex');
        todo.classList.add('hidden');
    })

    Array.from(ul.children).filter(todo => {
        return todo.textContent.toLowerCase().includes(buscarValor);
    }).forEach((todo)=>{
         todo.classList.remove('hidden');
         todo.classList.add('d-flex');
        })

})






