const form = document.querySelector('form');
const feedback = document.querySelector('.feedback')
// console.log(feedback);

form.addEventListener('submit',(event)=>{
    const username = event.target.input.value;
    event.preventDefault();
    console.log(username);
    const usernameRegex = /^[a-zA-Z]{6,12}$/;
    const isvalidUsername = usernameRegex.test(username);

    if(isvalidUsername){
        feedback.textContent = 'username válido';
        return;
    }
    feedback.textContent ='username deve conter 6 á 12 caracter e deve conter apenas letras';
})

// console.log(form.input);
form.input.addEventListener('keyup', event =>{
    console.log(event.target.value);
})