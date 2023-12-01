

async function GetAllPokemon()
{
    const getAll= 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
    let response= await fetch(getAll);
    let pokemonObj= await response.json();
    // console.log(pokemonObj);
    return pokemonObj;
}

async function GetPokemonByName(pokemonName)
{
    const getPokemonName= 'https://pokeapi.co/api/v2/pokemon/';
    let response= await fetch(getPokemonName + pokemonName);
    let pokemonObj= await response.json();
    // console.log(pokemonObj);
    return pokemonObj;
}

export{GetAllPokemon};
export{GetPokemonByName};

// Para testear los resultados, quite la marca de comentario
// GetAllPokemon();
// GetPokemonByName('pikachu');

