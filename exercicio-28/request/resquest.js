const bucarPokemon = (url, callback) => {
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', ()=>{
    
        const requestOk = request.readyState === 4 && request.status === 200;
        const requestNotOk = request.readyState === 4;
    
      if (requestOk) {
        const dados = JSON.parse(request.responseText)
        callback(null, dados)
         return
      }
    
      if (requestNotOk) {
        callback('Não foi possivel obter os dados do pokemon',null)
      }
        
    })
    
    // request.open('Get','https://pokeapi.co/api/v2/pokemon/pikachu');
    request.open('Get', url);
    request.send();
}

bucarPokemon('../request/pokemon.json', (error, dados) => {
  console.log(dados);
  bucarPokemon('../request/pokemon1.json', (error, dados) => {
    console.log(dados);
    bucarPokemon('../request/pokemon2.json', (error, dados) => {
      console.log(dados);
    })
  })
})
