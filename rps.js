const buttons = document.querySelectorAll('button[class=move]');
buttons.forEach(button => 
    button.addEventListener('click', game));
    //console.log(button.value)));
const container = document.querySelector('.container');    
const resultSection = document.querySelector('.round-results');
const scoreSection = document.querySelector('.score');
const roundsSection = document.querySelector('.rounds');

const finalResults = document.createElement('section');

let player = 0;
let computer = 0;
let rounds = 1;

function game() {
    //console.log((playRound(getPlayerSelection, computerPlay)));

        playRound(toCapitalize(this.value));
        rounds++;
        resetGame();
}


function playRound(playerSelection) {
    //const playerSelection = playerSelection;
    const computerSelection = computerPlay();
    //rounds++;
    let winner = 'none';
    if(playerSelection === computerSelection) {
        resultSection.textContent = `It's a draw! ${playerSelection} is equal to ${computerSelection}.`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'
            || playerSelection === 'Scissors' && computerSelection === 'Paper'
            || playerSelection === 'Paper' && computerSelection === 'Rock'){
        resultSection.textContent = `You Win! ${computerSelection} loses to ${playerSelection}.`;
        winner = 'player';
    } else {
        resultSection.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
        winner = 'computer';
    }
    keepScore(winner);
    //resetRound();
}

function keepScore(winner){ 
        /*
        if (winner === 'player') {
            player++;
        } else if (winner === 'computer'){
            computer++;
        }
        */
        switch(winner) {
            case 'player':
                player++;
                break;
            case 'computer':
                computer++;
                break;    
        }
        scoreSection.textContent = `Player: ${player} VS Computer: ${computer}` ;
        roundsSection.textContent = `Round: ${rounds}`;
}

function resetGame() {
    if (rounds === 6) {
        announceResults();
        rounds = 0;
        player = 0;
        computer = 0;
    }
}

function announceResults() {
    finalResults.textContent = `The winner is ${(player === computer) ? 'It\'s a draw!' 
                                : (player > computer) ? 'Player' : 'Computer' }`;
    container.appendChild(finalResults);
}

function deleteResults() {
    container.removeChild(finalResults);
}

/*
function getPlayerSelection() {
    const playerSelection = prompt('Rock, Paper or Scissors?');
    if (!playerSelection) {
        alert('Make your choice.');
    } else if (isValid(playerSelection)){
        return toCapitalize(playerSelection);                
    } else {
        alert('Rock, Paper or Scissors only :(');
    }
    console.log(toCapitalize(this.value));
    return toCapitalize(this.value);
}
*/

function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    let computerSelection;
    switch(random) {
        case 0: 
            computerSelection = 'Rock';
            break;

        case 1:
            computerSelection = 'Paper';
            break;

        case 2:
            computerSelection = 'Scissors';
    }
    return computerSelection;
}
/*
function isValid(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    return playerSelection === 'rock' ||
        playerSelection === 'paper' ||
        playerSelection === 'scissors';
}
*/
function toCapitalize(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const firstLetter = playerSelection.slice(0,1);
    playerSelection = playerSelection.replace(firstLetter, firstLetter.toUpperCase());
    return playerSelection;
}
