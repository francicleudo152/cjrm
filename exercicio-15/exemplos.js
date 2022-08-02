const title = document.querySelector('h1');

const p = document.querySelectorAll('p');

// p.style.border = 'dotted 3px green'
// p.style.color = 'green'
// p.classList.add('success');

console.log(p);

// title.setAttribute('class', 'titulo');
title.classList.add('title');
title.classList.remove('title');

title.style.color = 'blue';
title.style.fontSize= '50px';
title.style.fontSize= '';

p.forEach((paragrafo)=>{

    console.log(paragrafo.textContent);
    
       if(paragrafo.textContent.includes('error')){
         paragrafo.style.border = 'dotted 3px red'
       }

       if(paragrafo.textContent.includes('sucess')){
         paragrafo.style.border = 'dotted 3px green'
    
       }
})


