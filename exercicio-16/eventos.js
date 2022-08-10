
const paragraph = document.querySelector('p.copy-me');
// console.log(paragraph);
paragraph.addEventListener('copy',()=>{
    console.log('Texto copiado');
});

const div = document.querySelector('.egg');

div.addEventListener('mousemove',(event)=>{
    // console.log(event.offsetX, event.offsetY);
    div.textContent = `X: ${event.offsetX} | Y: ${event.offsetY}`;
})


document.addEventListener('wheel',(e)=>{
    console.log(e.pageX, e.pageY);
    // div.textContent += `X: ${e.pageX} | Y: ${e.pageY}`;

})