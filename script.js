// your code here...

let turn = "X";
let moves = ["", "", "", "", "", "", "", "", ""];
let isWinner = false

const cells = document.querySelectorAll(".cell");
const status = document.querySelector(".game--status")
const restart = document.querySelector(".game--restart")
const xConditions = moves[0, 1, 2] == "X" || moves[3, 4, 5] == "X" || moves[6, 7, 8] == "X" || moves[0, 3, 6] == "X" || moves[1, 4, 7] == "X" || moves[2, 5, 8] == "X" || moves[0, 4, 8] == "X" || moves[2, 4, 6] == "X"

const showStatus = () => {
    if (turn == "X") {
        status.innerText = `It's ${turn}'s turn`
    } else if (turn == "O") {
        status.innerText = `It's ${turn}'s turn`
    }
}

showStatus()

const winner = () => {
    if ((moves[0] == "X" && moves[1] == "X" && moves[2] == "X") || (moves[3] == "X" && moves[4] == "X" && moves[5] == "X") || (moves[6] == "X" && moves[7] == "X" && moves[8] == "X") || (moves[0] == "X" && moves[3] == "X" && moves[6] == "X") || (moves[1] == "X" && moves[4] == "X" && moves[7] == "X") || (moves[2] == "X" && moves[5] == "X" && moves[8] == "X") || (moves[0] == "X" && moves[4] == "X" && moves[8] == "X") || (moves[2] == "X" && moves[4] == "X" && moves[6] == "X")) {
        status.innerHTML = `Player X has won`
        isWinner = true
    } else if ((moves[0] == "O" && moves[1] == "O" && moves[2] == "O") || (moves[3] == "O" && moves[4] == "O" && moves[5] == "O") || (moves[6] == "O" && moves[7] == "O" && moves[8] == "O") || (moves[0] == "O" && moves[3] == "O" && moves[6] == "O") || (moves[1] == "O" && moves[4] == "O" && moves[7] == "O") || (moves[2] == "O" && moves[5] == "O" && moves[8] == "O") || (moves[0] == "O" && moves[4] == "O" && moves[8] == "O") || (moves[2] == "O" && moves[4] == "O" && moves[6] == "O")) {
        status.innerHTML = `Player O has won`
        isWinner = true
    } else if(moves.includes("") == false && isWinner == false) {
        status.innerHTML = "Game ended in a draw"
        isWinner = true
    }
}

for (cell of cells) {
    cell.onclick = (event) => {
        const cellIndex = event.target.getAttribute("data-cell-index")
        if (moves[cellIndex] == "" && isWinner == false) {
            if (turn == "X") {
                turn = "O"
                event.target.innerHTML = "X"
                moves[cellIndex] = "X"
            } else if (turn == "O") {
                turn = "X"
                event.target.innerHTML = "O"
                moves[cellIndex] = "O"
            }
            showStatus()
        }
        winner()
    }
}

restart.onclick = () => {
    for (cell of cells) {
        cell.innerHTML = ""
    }
    moves.forEach((move, index) => {
        moves[index] = ""
    })
    turn = "X"
    isWinner = false
    showStatus()
}

