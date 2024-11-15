console.log("hello player");
const boardHTML = document.getElementById('board');
let winner = document.getElementById('winner');

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
    if ( gameBoard[0] == 1 & gameBoard[1] == 1 & gameBoard[2] == 1 ){winner.innerHTML=("X WON");clear()}
    if ( gameBoard[3] == 1 & gameBoard[4] == 1 & gameBoard[5] == 1 ){winner.innerHTML=("X WON");clear()}
    if ( gameBoard[6] == 1 & gameBoard[7] == 1 & gameBoard[8] == 1 ){winner.innerHTML=("X WON");clear()}
    if ( gameBoard[0] == 1 & gameBoard[3] == 1 & gameBoard[6] == 1 ){winner.innerHTML=("X WON");clear()}
    if ( gameBoard[1] == 1 & gameBoard[4] == 1 & gameBoard[7] == 1 ){winner.innerHTML=("X WON");clear()}
    if ( gameBoard[2] == 1 & gameBoard[5] == 1 & gameBoard[8] == 1 ){winner.innerHTML=("X WON");clear()}
    if ( gameBoard[0] == 1 & gameBoard[4] == 1 & gameBoard[8] == 1 ){winner.innerHTML=("X WON");clear()}
    if ( gameBoard[6] == 1 & gameBoard[4] == 1 & gameBoard[2] == 1 ){winner.innerHTML=("X WON");clear()}
    //
    if ( gameBoard[0] == 2 & gameBoard[1] == 2 & gameBoard[2] == 2 ){winner.innerHTML=("O WON");clear()}
    if ( gameBoard[3] == 2 & gameBoard[4] == 2 & gameBoard[5] == 2 ){winner.innerHTML=("O WON");clear()}
    if ( gameBoard[6] == 2 & gameBoard[7] == 2 & gameBoard[8] == 2 ){winner.innerHTML=("O WON");clear()}
    if ( gameBoard[0] == 2 & gameBoard[3] == 2 & gameBoard[6] == 2 ){winner.innerHTML=("O WON");clear()}
    if ( gameBoard[1] == 2 & gameBoard[4] == 2 & gameBoard[7] == 2 ){winner.innerHTML=("O WON");clear()}
    if ( gameBoard[2] == 2 & gameBoard[5] == 2 & gameBoard[8] == 2 ){winner.innerHTML=("O WON");clear()}
    if ( gameBoard[0] == 2 & gameBoard[4] == 2 & gameBoard[8] == 2 ){winner.innerHTML=("O WON"); clear()}
    if ( gameBoard[6] == 2 & gameBoard[4] == 2 & gameBoard[2] == 2 ){winner.innerHTML=("O WON"); clear()}
}
function clear() {
    // Reset the game board array
    gameBoard = [0, 0, 0, 
                 0, 0, 0,
                 0, 0, 0];
 
    turn = 0;


    boardHTML.innerHTML = '';

    // Regenerate the board
    generateBoard();

    console.log("Game reset!");
}
function generateBoard () {

    for (i=0; i<9; i++){
      const cell = document.createElement('div')
      cell.className= "cell";
      boardHTML.append(cell);
      cell.setAttribute("data-index", i); 
      cell.addEventListener("click", function() {
        const decide = parseInt(cell.getAttribute("data-index"));
        let innercell = document.createElement('h1');
        if (turn % 2 == 0) {
            innercell.innerHTML = "X"; // Add X
        } else {
            innercell.innerHTML = "O"; // Add O
        }
        cell.append(innercell);
        Round(decide);
    })}}
generateBoard();
