const buttons = document.querySelectorAll('button[class=move]');
buttons.forEach(button => 
    button.addEventListener('click', getPlayerSelection));
    //console.log(button.value)));

function game() {
    console.log((playRound(getPlayerSelection, computerPlay)));
}

function playRound(playerChoice, computerChoice) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();

    if(playerSelection === computerSelection) {
        return `It's a draw! ${playerSelection} is equal to ${computerSelection}.`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'
            || playerSelection === 'Scissors' && computerSelection === 'Paper'
            || playerSelection === 'Paper' && computerSelection === 'Rock'){
        return `You Win! ${computerSelection} loses to ${playerSelection}.`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
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
