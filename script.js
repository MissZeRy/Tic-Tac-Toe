const title = document.getElementById('title');
const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const winnerText = document.getElementById('winner')
const showHistory = document.getElementById('history')
const restartButton = document.getElementById('btm_restart');
const historyButton = document.getElementById('btm_history');

let gameHistory = [];


let currentPlayer = "X";
let xTurn = true;
let count = 0;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
    const cell = e.target;
    if (xTurn) {
        xTurn = false;
        cell.innerText = currentPlayer
        cell.classList.add(currentPlayer);
    } else {
        xTurn = true;
        cell.innerText = currentPlayer
        cell.classList.add(currentPlayer);
    }
    count++;
    checkWin()
    currentPlayer = currentPlayer === "X" ? "O" : "X"
}


function checkWin() {
    for (let i of winningCombinations) {
        let [e1, e2, e3] = [cells[i[0]].innerHTML, cells[i[1]].innerHTML, cells[i[2]].innerHTML];
        if (e1 !== "" && e2 !== "" && e3 !== "") {
            if (e1 === e2 && e2 === e3) {
                winner(e1);
                count = 0;
                return;
            }
        }
    }
    if (count === 9) {
        winner("DRAW");
    }
}

function winner(winner) {
    if (winner === "DRAW") {
        winnerText.innerHTML = `DRAW !`
        winnerText.classList.add("true");
        title.classList.add("winning");
        board.classList.add("winning");
        gameHistory.push(winner);
    } else {
        winnerText.innerHTML = `'${winner}' WINNER`
        winnerText.classList.add("true");
        title.classList.add("winning");
        board.classList.add("winning");
        gameHistory.push(winner);
    }
}


historyButton.addEventListener('click', viewHistory);

function viewHistory() {

    const ul = document.createElement('ul');

    const existingParagraph = document.querySelector('ul');
    if (existingParagraph) {
        existingParagraph.remove();
    }

    for (let i of gameHistory) {
        const li = document.createElement('li');
        li.innerHTML = i;
        ul.appendChild(li)
    }
    showHistory.appendChild(ul)
    winnerText.classList.remove("true");
    winnerText.innerHTML = "";
    title.classList.remove("winning");
    showHistory.classList.toggle("show")
    board.classList.add("winning");
}


restartButton.addEventListener('click', restartGame);

function restartGame() {
    cells.forEach(cell => {
        cell.innerText = '';
        count = 0;
        winnerText.classList.remove("true");
        title.classList.remove("winning");
        board.classList.remove("winning");
        showHistory.classList.remove("show")
        winnerText.innerHTML = ""
        cell.classList.remove('X', 'O');
        cell.addEventListener('click', handleClick, { once: true });
    });
    currentPlayer = 'X';
}
