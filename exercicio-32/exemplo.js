// const getPkemons = async()=>{
//     const bulbasours = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
//     const charmander = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
//     const squirtle = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
//     console.log(await bulbasours.json())
//     console.log(await charmander.json())
//     console.log(await squirtle.json())
// }

// getPkemons()

const getPkemons = async () => {
    const bulbasaur = fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
    const charmander = fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const squirtle = fetch('https://pokeapi.co/api/v2/pokemon/7');

    const resultado = await Promise.all([bulbasaur, charmander, squirtle])
    resultado.forEach(async response => console.log(await response.json()))
}

getPkemons()