let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

scoreUpdate();

function randomGame () {
    let randomNumber = Math.random();
    let randomMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        randomMove = 'Rock'
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        randomMove = 'Paper'
    }
    else if (randomNumber >= 2/3 && randomNumber < 1) {
        randomMove = 'Scissors'
    }

    return randomMove;
};

function playGame (moves) {
    const randomMove = randomGame();
    let getResult = '';

    if (moves === 'Rock') {
        if (randomMove === 'Rock') {
            getResult = 'Tie.'
        }
        else if (randomMove === 'Paper') {
            getResult = 'You win.'
        }
        else if (randomMove === 'Scissors') {
            getResult = 'You loss.'
        }
    }
    else if (moves === 'Paper') {
        if (randomMove === 'Rock') {
            getResult = 'You loss.'
        }
        else if (randomMove === 'Paper') {
            getResult = 'Tie.'
        }
        else if (randomMove === 'Scissors') {
            getResult = 'You win.'
        }
    }
    else if (moves === 'Scissors') {
        if (randomMove === 'Rock') {
            getResult = 'You win.'
        }
        else if (randomMove === 'Paper') {
            getResult = 'You loss.'
        }
        else if (randomMove === 'Scissors') {
            getResult = 'Tie.'
        }
    };

    if (getResult === 'You win.') {
        score.wins += 1;
    }
    else if (getResult === 'You loss.') {
        score.losses += 1;
    }
    else if (getResult === 'Tie.') {
        score.ties += 1;
    };

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.result')
    .innerHTML = getResult;

    document.querySelector('.moves')
    .innerHTML = `You 
    "${moves}" - 
    "${randomMove}" computer`;

    scoreUpdate();
};

function scoreUpdate() {
    document.querySelector('.finalResult')
   .innerHTML =`You win: ${score.wins}, You loss: ${score.losses}, Tie: ${score.ties}.`
}
