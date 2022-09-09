
const form = document.querySelector('.form-add-todo');
// const form = document.forms[1];

form.addEventListener('submit', event=>{
    event.preventDefault();
    const valorInput = event.target.add.value.trim();
    console.log(valorInput);

})