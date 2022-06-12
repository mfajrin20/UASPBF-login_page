//Add
// Fungsi dari localstroge untuk menyimpan data secara temporary bukan permanent 
// setiap menjalankan arau reload data harus clear dulu di lokal storage
export function SavePokemons(list) {
  localStorage.setItem("pokedex_pokemons", JSON.stringify(list));
}

//----------------------------------------------

// Verify
export function VerifyPokemons() {
  var pokemons = localStorage.getItem("pokedex_pokemons");
  return JSON.parse(pokemons);
}
