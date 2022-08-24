const form = document.querySelector('form');
const feedback = document.querySelector('.feedback');
const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username);
// console.log(feedback);


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const username = event.target.input.value;
    const isvalidUsername = testUsername(username);
    if(isvalidUsername){
        feedback.textContent = 'username válido';
        return;
    }
    feedback.textContent ='username deve conter 6 á 12 caracter e deve conter apenas letras';
})

// console.log(form.input);
form.input.addEventListener('keyup', event =>{
    const username = event.target.value;
    const isvalidUsername = testUsername(username)
    if (isvalidUsername) {
        form.input.setAttribute('class','success');
        console.log(form.input);
        return;
    } 
    form.input.setAttribute('class','error');
    console.log(form.input);


})