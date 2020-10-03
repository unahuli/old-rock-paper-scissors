const buttons = document.querySelectorAll('button[class=move]');
buttons.forEach(button => 
    button.addEventListener('click', playRound));
    //console.log(button.value)));
const results = document.querySelector('.results');
function game() {
    console.log((playRound(getPlayerSelection, computerPlay)));
}

function playRound() {
    const playerSelection = toCapitalize(this.value);
    const computerSelection = computerPlay();

    if(playerSelection === computerSelection) {
        results.textContent = `It's a draw! ${playerSelection} is equal to ${computerSelection}.`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'
            || playerSelection === 'Scissors' && computerSelection === 'Paper'
            || playerSelection === 'Paper' && computerSelection === 'Rock'){
        results.textContent = `You Win! ${computerSelection} loses to ${playerSelection}.`;
    } else {
        results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
}

function getPlayerSelection() {
    // const playerSelection = prompt('Rock, Paper or Scissors?');
    // if (!playerSelection) {
    //     alert('Make your choice.');
    // } else if (isValid(playerSelection)){
    //     return toCapitalize(playerSelection);                
    // } else {
    //     alert('Rock, Paper or Scissors only :(');
    // }
    //console.log(toCapitalize(this.value));
    return toCapitalize(this.value);
}

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

function isValid(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    return playerSelection === 'rock' ||
        playerSelection === 'paper' ||
        playerSelection === 'scissors';
}

function toCapitalize(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const firstLetter = playerSelection.slice(0,1);
    playerSelection = playerSelection.replace(firstLetter, firstLetter.toUpperCase());
    return playerSelection;
}
