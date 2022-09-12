
const form = document.querySelector('.form-add-todo');
const ul = document.querySelector('.todos-container');
const buscar = document.querySelector('.form-search input');


// const form = document.forms[1];

form.addEventListener('submit', event=>{
    event.preventDefault();
    const valorInput = event.target.add.value.trim();
    if (valorInput.length) {
        ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${valorInput}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`  

      event.target.reset();
      console.log(event.target);
    }

});

ul.addEventListener('click', event => {
    const elementoClicado = event.target;
   const deletar = Array.from(elementoClicado.classList);

   if (deletar.includes('delete')) {
      elementoClicado.parentElement.remove(); 
   }

} )

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






