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
  filterName = filterName.charAt(0).toUpperCase() + filterName.slice(1).toLowerCase()
  let pokemonTypes = ["grass","poison","fire","flying","bug","water","normal","ground","electric","fairy","fighting","psychic","rock","steal","ice","ghost","dragon"]
  for(const i of pokemons){
    for(const type of pokemonTypes){
      if (document.getElementById(type).checked&&i.types.includes(type)&&i.name.includes(filterName)){ 
        table.push(i)
        break
      }
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
