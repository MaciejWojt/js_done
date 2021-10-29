/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");
function renderPokemons(pokemons) {
  // uzupełnij tutaj
  for(const i of pokemons){
    let div = document.createElement("div")
    div.id = i.id
    div.classList.add(i.types)
    let img = document.createElement("img")
    img.src = i.image
    div.innerText = i.name
    div.append(img)
    pokemonsContainer.append(div)

  }
  
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons) {
  // uzupełnij tutaj
  // zwróć odfiltrowaną tablicę pokemonów
  let table = []
  let filterName = pokemon_name.value
  for(const i of pokemons){
    if (grass.checked&&i.types.includes("grass")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
    if (poison.checked&&i.types.includes("poison")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
    if (fire.checked&&i.types.includes("fire")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
    if (flying.checked&&i.types.includes("flying")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
    if (bug.checked&&i.types.includes("bug")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
    if (water.checked&&i.types.includes("water")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
    if (normal.checked&&i.types.includes("normal")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
    if (ground.checked&&i.types.includes("ground")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
    if (electric.checked&&i.types.includes("electric")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
    if (fairy.checked&&i.types.includes("fairy")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
    if (fighting.checked&&i.types.includes("fighting")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
    if (psychic.checked&&i.types.includes("psychic")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
    if (rock.checked&&i.types.includes("rock")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
    if (steal.checked&&i.types.includes("steal")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
    if (ice.checked&&i.types.includes("ice")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
    if (ghost.checked&&i.types.includes("ghost")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
    if (dragon.checked&&i.types.includes("dragon")&&i.name.includes(filterName)){ 
      table.push(i)
      continue
    }
  }
  return table
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  pokemonsContainer.innerText = "";
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
