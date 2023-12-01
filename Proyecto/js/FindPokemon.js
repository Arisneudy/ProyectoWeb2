import { GetPokemonByName } from "./IPockeApi.js";

var btn = document.getElementById("btn-buscador"),
  txt = document.getElementById("txt-buscador");

btn.addEventListener("click", function (e) {
  var name = txt.value;
  var container = document.getElementById("pokemon-container");
  var divpoke = "";

  // Array para almacenar todas las promesas
  const promises = [];

  const promise = GetPokemonByName(name).then((poke) => {
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
    divpoke += `${pokeDiv}`;
  });

  promises.push(promise);

  // Esperar a que todas las promesas se resuelvan
  Promise.all(promises).then(() => {
    container.innerHTML = `${divpoke}`;
    console.log(divpoke);
  });
});
