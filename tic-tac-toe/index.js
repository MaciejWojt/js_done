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

  if (checkWin()==1){
    window.location.reload(true);
  }
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
let winwin = (a,znak)=>{
  if((a[0]==znak&&a[1]==znak&&a[2]==znak) || (a[3]==znak&&a[4]==znak&&a[5]==znak) || (a[6]==znak&&a[7]==znak&&a[8]==znak) || (a[0]==znak&&a[3]==znak&&a[6]==znak) || (a[1]==znak&&a[4]==znak&&a[7]==znak) || (a[2]==znak&&a[5]==znak&&a[8]==znak) || (a[0]==znak&&a[4]==znak&&a[8]==znak) || (a[2]==znak&&a[4]==znak&&a[6]==znak)){
    return true
  }
}
function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
  
  let tiles = []
  for(let i=0;i<9;i++){
    tiles.push(document.querySelectorAll(".tile")[i].classList[1])
  }
  if(winwin(tiles,"tile-x")){
    alert("x won")
    return 1
  }
  if(winwin(tiles,"tile-o")){
    alert("o won")
    return 1
  }
  
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
document.getElementsByClassName("reset")[0].addEventListener("click",reset)
function reset() {
  // 4. zresetuj stan gry
  window.location.reload(true);
}
