const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    console.log('clicou no button');
})

const lis = document.querySelectorAll('li')

lis.forEach((li)=>{
    li.addEventListener('click',(event)=>{
        // console.log(event.target);
        // console.log(li);
        const clickLi = event.target;
        clickLi.style.textDecoration = 'line-through';
    })

})