// console.log(pokemonData);
// console.log(pokemonData.results);


// let HTML = '<div class = "row">';

// for (let i = 0; i < pokemonData.results.length; i++) {
//     // console.log(pokemonData.results[i].name);
//     let pokemon = pokemonData.results[i];

//     HTMLfragment = ``;
//     if((i) % 4 == 0){
//         HTMLfragment = `<div class ="row">`;
//     }

//     HTMLfragment = `<div class="col-md-3">
//         <div class = "card">
//             <h2>${(pokemon.name) ? pokemon.name : 'pokemonas'}</h2>
//             <img src="${pokemon.img}" alt="bulbasaur">
//         </div>
//     </div>`;
//     if((i + 1) % 4 == 0){
//         HTMLfragment += `</div>`;
//         if (i !=pokemonData.results.length-1) {
//             HTMLfragment += `<div class = "row">`
//         }}

//     HTML += HTMLfragment;
// }

// document.getElementById('container').innerHTML = HTML;


// **************SUPAPRASTINTAS VARIANATS*************
HTML ='<div class="row">';
 for (let i = 0; i < pokemonData.results.length; i++) {
    let pokemon = pokemonData.results[i];
    HTML += ` 
        <div class="col-md-3">
            <div class="card">
                <h2>${ pokemon.name}</h2>
                <img src="${pokemon.img}" alt="bus veliau">
            </div>    
        </div>`;
  }

  HTML += `</div>`;
//   console.log(HTML);
  document.getElementById('container').innerHTML = HTML;



`<div class="row">
<div class="col-md-3">
    <div class = "card">
        <h2>Bulbasaur</h2>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="bulbasaur">
    </div>
</div>`