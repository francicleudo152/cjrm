const butao = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
// const fechar = document.querySelector('.popup-close');

butao.addEventListener('click',()=>{
    console.log('Clicou no botão!!');
    popup.style.display = 'block';

})

// fechar.addEventListener('click',()=>{
//     console.log("fechar");
//     popup.style.display = 'none';

// })


// Primeira maneira de fazer...........................................

// popup.addEventListener('click',(event)=>{
//     const clicado = event.target.classList[0]
//     if (clicado === 'popup-wrapper' || clicado === 'popup-close'|| clicado === 'popup-link' ) {
//         // popup.style.display = 'none';
//         console.log(clicado);
//     }
// })



//Segunda maneira de fazer mas Profissional...............................

popup.addEventListener('click',(event)=>{
    const clicado = event.target.classList[0]
    const classNames = ['popup-wrapper','popup-close','popup-link'];
    const fecharPopup = classNames.some(classNames => classNames === clicado)
    if (fecharPopup) {
        popup.style.display = 'none';
        // console.log(clicado);
        return
    }
})