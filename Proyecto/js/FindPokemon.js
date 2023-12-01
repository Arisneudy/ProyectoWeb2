import { GetPokemonByName } from "./IPockeApi.js";
import { showPokemonDetails } from "./alertas.js";
import { LoadPokes } from "./LoadPokemons.js";

var form = document.getElementById("form-buscar"),
  txt = document.getElementById("txt-buscador");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = txt.value;
  var container = document.getElementById("pokemon-container");
  var divpoke = "";

  // Array para almacenar todas las promesas
  const promises = [];

  const promise = GetPokemonByName(name)
    .then((poke) => {
      console.log(poke);
      var types = "";
      for (let e = 0; e < poke.types.length; e++) {
        types += `<p class = "${poke.types[e].type.name}">${poke.types[e].type.name}</p>`;
      }
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
      container.innerHTML = pokeDiv; // Agregar la caja de Pokémon al contenedor

      // Obtener la última caja de Pokémon agregada
      var lastPokemonBox = container.lastElementChild;

      // Agregar un evento de clic a la última caja de Pokémon
      lastPokemonBox.addEventListener("click", function () {
        showPokemonDetails(poke);
      });
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Pokemon no encontrado",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          container.innerHTML = ''; 
          LoadPokes();
        }
      });
      container.innerHTML = ''; 
      LoadPokes();
    });
});
