// Importaciones
import { GetAllPokemon, GetPokemonByName } from "./IPockeApi.js";
import { showPokemonDetails } from "./alertas.js";

// Variables

function LoadPokes(){
  var container = document.getElementById("pokemon-container");

  // Carga la información de los Pokémon
  GetAllPokemon().then((pokemonList) => {
    const promises = [];
  
    for (let i = 0; i < 20; i++) {
      const promise = GetPokemonByName(pokemonList.results[i].name).then(
        (poke) => {
          var types = "";
          for (let e = 0; e < poke.types.length; e++) {
            types += `<p class = "${poke.types[e].type.name}">${poke.types[e].type.name}</p>`;
          }
          // Cambiado la clase a "pokemon-box"
          var pokeDiv = `<div class="pokemon-box">
                    <div class="pokemon">
                        <div class="pokemon-img">
                            <img src=${poke.sprites.front_default} alt="" />
                        </div>
                        <div class="pokemon-info">
                            <h2>${poke.name}</h2>
                            ${types}
                        </div>
                    </div>
                </div>`;
          container.insertAdjacentHTML("beforeend", pokeDiv); // Agregar la caja de Pokémon al contenedor
  
          // Obtener la última caja de Pokémon agregada
          var lastPokemonBox = container.lastElementChild;
  
          // Agregar un evento de clic a la última caja de Pokémon
          lastPokemonBox.addEventListener("click", function () {
            showPokemonDetails(poke);
          });
        }
      );
  
      promises.push(promise);
    }
  
    // Esperar a que todas las promesas se resuelvan
    Promise.all(promises).then(() => {
      console.log("Pokémons cargados");
    });
  });
  
}

export{LoadPokes};
