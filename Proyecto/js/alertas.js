// Función para mostrar detalles del Pokémon
function showPokemonDetails(pokemon) {
  Swal.fire({
    title: `Detalles de ${pokemon.name}`,
    html: `<p>${getPokemonTypeParagraph(pokemon.types)}</p>
           <p><img src="${pokemon.sprites.front_default}" alt="${
      pokemon.name
    }" /></p>
           <p>Estadísticas:</p>
           <ul class="hab-poken">${getPokemonStatsList(pokemon.stats)}
              <li>Weight: ${pokemon.weight}</li>
              <li>Height: ${pokemon.height}</li>
           </ul>`,
  });
}

// Función para obtener párrafo de tipos de Pokémon
function getPokemonTypeParagraph(types) {
  return types
    .map(
      (type) =>
        `<span class="${type.type.name.toLowerCase()}">${type.type.name}</span>`
    )
    .join(" ");
}

// Función para obtener lista de estadísticas de Pokémon
function getPokemonStatsList(stats) {
  return stats
    .map((stat) => `<li>${stat.stat.name}: ${stat.base_stat}</li>`)
    .join("");
}

// Exporta la función para que pueda ser utilizada en otros archivos
export { showPokemonDetails };
