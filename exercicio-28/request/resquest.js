const bucarPokemon = callback => {
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', ()=>{
    
        const requestOk = request.readyState === 4 && request.status === 200;
        const requestNotOk = request.readyState === 4;
    
      if (requestOk) {
        callback(null, request.responseText)
         return
      }
    
      if (requestNotOk) {
        callback('Nao foi possivel obter os dados do pokemon',null)
      }
        
    })
    
    request.open('Get','https://pokeapi.co/api/v2/pokemon/pikachu2');
    request.send();
}

bucarPokemon((error, dados)=>{
    console.log('callback foi executado');

    if (error) {
        console.log(error);
        return
    }

    console.log(dados);
})
