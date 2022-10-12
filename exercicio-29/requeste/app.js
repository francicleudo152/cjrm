const request = new XMLHttpRequest();


request.addEventListener('readystatechange',()=>{
    if (request.readyState === 4) {
        const dados = request.responseText;
        console.log(dados);  
    };

    })
    
    request.open('GET','https://pokeapi.co/api/v2/pokemon/ditto');
    request.send()
    

// console.log(request);



