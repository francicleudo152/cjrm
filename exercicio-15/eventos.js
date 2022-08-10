const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    const li = document.createElement('li');
    li.textContent = 'Novo item';
    // ul.append(li);
    ul.prepend(li);
})

const ul = document.querySelector('ul');

// ul.remove();

const lis = document.querySelectorAll('li')



// modo não muito eficiente.................................................

// lis.forEach((li)=>{
//     li.addEventListener('click',(event)=>{
//         // console.log(event.target);
//         // console.log(li);
//         const clickLi = event.target;
//         // clickLi.style.textDecoration = 'line-through';
//         clickLi.remove();
//     })

// })



// aplicação do event delegation ....................................

ul.addEventListener('click', event => {
    // console.log(event);
    const clicado = event.target;
    if (clicado.tagName === 'LI') {
        clicado.remove();
    }
})






