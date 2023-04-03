'use strict';
// let secretNumber = Math.floor(Math.random() * (35 - 18 + 1) + 18);
let secretNumber = Math.floor(Math.random() * (30 - 16 + 1) + 16);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.guess').addEventListener('click', function () {
  const answer = Number(document.querySelector('.answer').value);
  console.log(answer, typeof answer);

  if (!answer) {
    // document.querySelector('.message').textContent = '⛔NO NUMBER!';
    displayMessage('⛔NO NUMBER!');
  } // If a player wins
  else if (answer === secretNumber) {
    // document.querySelector('.message').textContent = '🎉CORRECT SCORE';
    displayMessage('🎉CORRECT NUMBER');
    document.querySelector('.between').textContent = '🎉WINNER';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.heading').textContent = '💥CONGRATS';
    document.querySelector('.container').style.backgroundColor = '#0626f9bc';
    document.querySelector('.number').style.width = '19rem';
    document.querySelector('.gif_box-1').style.display = 'inline';
    document.querySelector('.gif_box-0').style.display = 'none';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // if the score is below 16
  } else if (answer <= 16) {
    if (score > 1) {
      displayMessage("🔻I'm older than that");
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💔‼GAME OVER');
    }
  }
  // If a win lose
  else if (answer !== secretNumber) {
    if (score > 1) {
      displayMessage(
        answer > secretNumber
          ? '📉Too old for me try again!'
          : '📈TOO young for me try again!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💔‼GAME OVER!');
    }
  }

  // If the score if high
  //   else if (answer !== secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉TOO HIGH!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💔‼GAME OVER!';
  //     }
  //   }
  //   // if the score is low
  //   else if (answer < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈TOO LOW!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💔‼GAME OVER';
  //     }
  //   }
});

document.querySelector('.replay').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * (30 - 16 + 1) + 16);

  document.querySelector('.heading').textContent = 'Guess my Age!🤔';

  document.querySelector('.between').textContent = 'range 16-30😁';
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.answer').value = '';
  document.querySelector('.container').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '18rem';
  document.querySelector('.gif_box-1').style.display = 'none';
  document.querySelector('.gif_box-0').style.display = 'inline';
});
