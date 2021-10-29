let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  checkWin();
});

function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  if(turn=="o"){
    document.getElementsByClassName("turn")[0].innerHTML = "O turn"
  }
  else{
    document.getElementsByClassName("turn")[0].innerHTML = "X turn"
  }
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
  let p1 = document.querySelectorAll(".tile")[0].classList[1]
  let p2 = document.querySelectorAll(".tile")[1].classList[1]
  let p3 = document.querySelectorAll(".tile")[2].classList[1]
  let p4 = document.querySelectorAll(".tile")[3].classList[1]
  let p5 = document.querySelectorAll(".tile")[4].classList[1]
  let p6 = document.querySelectorAll(".tile")[5].classList[1]
  let p7 = document.querySelectorAll(".tile")[6].classList[1]
  let p8 = document.querySelectorAll(".tile")[7].classList[1]
  let p9 = document.querySelectorAll(".tile")[8].classList[1]
  if(((p1=="tile-x"&&p2=="tile-x"&&p3=="tile-x")) || (p4=="tile-x"&&p5=="tile-x"&&p6=="tile-x") || (p7=="tile-x"&&p8=="tile-x"&&p9=="tile-x") || (p1=="tile-x"&&p4=="tile-x"&&p7=="tile-x") || (p2=="tile-x"&&p5=="tile-x"&&p8=="tile-x") || (p3=="tile-x"&&p6=="tile-x"&&p9=="tile-x") || (p1=="tile-x"&&p5=="tile-x"&&p9=="tile-x") || (p3=="tile-x"&&p5=="tile-x"&&p7=="tile-x")){
    alert("X won")
  }
  if((p1=="tile-o"&&p2=="tile-o"&&p3=="tile-o") || (p4=="tile-o"&&p5=="tile-o"&&p6=="tile-o") || (p7=="tile-o"&&p8=="tile-o"&&p9=="tile-o") || (p1=="tile-o"&&p4=="tile-o"&&p7=="tile-o") || (p2=="tile-o"&&p5=="tile-o"&&p8=="tile-o") || (p3=="tile-o"&&p6=="tile-o"&&p9=="tile-o") || (p1=="tile-o"&&p5=="tile-o"&&p9=="tile-o") || (p3=="tile-o"&&p5=="tile-o"&&p7=="tile-o")){
    alert("O won")
  }
  
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
document.getElementsByClassName("reset")[0].addEventListener("click",reset)
function reset() {
  // 4. zresetuj stan gry
  window.location.reload(true);
}
