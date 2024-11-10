console.log("hello player");
const boardHTML = document.getElementById('board');
var turn = 0
var gameBoard = [0, 0, 0, 
                 0, 0, 0,
                 0, 0, 0,];
console.log(gameBoard);
function Round (salect){
    if (turn%2 == 0){
    gameBoard[salect] = 1}
    else  {gameBoard[salect] = 2}
    turn++
    console.log(gameBoard);
    check();
}
function check (){
    if ( gameBoard[0] == 1 & gameBoard[1] == 1 & gameBoard[2] == 1 ){console.log("x won")}
    if ( gameBoard[3] == 1 & gameBoard[4] == 1 & gameBoard[5] == 1 ){console.log("x won")}
    if ( gameBoard[6] == 1 & gameBoard[7] == 1 & gameBoard[8] == 1 ){console.log("x won")}
    if ( gameBoard[0] == 1 & gameBoard[3] == 1 & gameBoard[6] == 1 ){console.log("x won")}
    if ( gameBoard[1] == 1 & gameBoard[4] == 1 & gameBoard[7] == 1 ){console.log("x won")}
    if ( gameBoard[2] == 1 & gameBoard[5] == 1 & gameBoard[8] == 1 ){console.log("x won")}
    if ( gameBoard[0] == 1 & gameBoard[4] == 1 & gameBoard[8] == 1 ){console.log("x won")}
    if ( gameBoard[6] == 1 & gameBoard[4] == 1 & gameBoard[2] == 1 ){console.log("x won")}
    //
    if ( gameBoard[0] == 2 & gameBoard[1] == 2 & gameBoard[2] == 2 ){console.log("o won")}
    if ( gameBoard[3] == 2 & gameBoard[4] == 2 & gameBoard[5] == 2 ){console.log("o won")}
    if ( gameBoard[6] == 2 & gameBoard[7] == 2 & gameBoard[8] == 2 ){console.log("o won")}
    if ( gameBoard[0] == 2 & gameBoard[3] == 2 & gameBoard[6] == 2 ){console.log("o won")}
    if ( gameBoard[1] == 2 & gameBoard[4] == 2 & gameBoard[7] == 2 ){console.log("o won")}
    if ( gameBoard[2] == 2 & gameBoard[5] == 2 & gameBoard[8] == 2 ){console.log("o won")}
    if ( gameBoard[0] == 2 & gameBoard[4] == 2 & gameBoard[8] == 2 ){console.log("o won")}
    if ( gameBoard[6] == 2 & gameBoard[4] == 2 & gameBoard[2] == 2 ){console.log("o won")}
}
function generateBoard () {

    for (i=0; i<9; i++){
      const cell = document.createElement('div')
      cell.className= "cell";
      boardHTML.append(cell);
     cell.addEventListener('click', add())
    }

}
function add (decide) {
    if (decide%2 == 0){
        let innercell = document.createElement('h1');
        innercell.innerHTML= "X"
    }
    else {let innercell = document.createElement('h1');
        innercell.innerHTML= "o"}
        Round(decide);
}
generateBoard();