// https://pokeapi.co/api/v2/pokemon/3

async function pokeapi(input_id){
    var pokemon = document.querySelector("#"+input_id).value
    pokemon = pokemon.toLowerCase()
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    var poke_data = await response.json()
    console.log(poke_data.sprites.front_default)
    document.querySelector("#poke-card").innerHTML = `<h2 id="poke-name">${poke_data.name}</h2>
    <img id="poke-img" src="${poke_data.sprites.front_default}" alt="" style="width:150px; height:150px;">`
}