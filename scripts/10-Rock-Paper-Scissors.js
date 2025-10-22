
       let score=JSON.parse(localStorage.getItem('score')) || 
          {wins:0,
          losses:0,
          ties:0,
        };
       updateScoreElement();

      //  if(!score){
      //   score={
      //     wins:0,
      //     losses:0,
      //     ties:0,
      //   };
      //  }
function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === computerMove) {
      result = 'Tie';
    } else if (
      (playerMove === 'Rock' && computerMove === 'Scissors') ||
      (playerMove === 'Paper' && computerMove === 'Rock') ||
      (playerMove === 'Scissors' && computerMove === 'Paper')
    ) {
      result = 'You Win';
    } else {
      result = 'You Lose';
    }
  if(result==='You Win'){
    score.wins+=1;

    }else if(result==='You Lose'){
        score.losses+=1;

    }else{
        score.ties+=1;

    }
      localStorage.setItem('score',JSON.stringify(score));
        updateScoreElement();

        document.querySelector('.Js-result').innerHTML=result;
        document.querySelector('.Js-moves').innerHTML=`You 
        <img src="${playerMove}-emoji.png" class="move-icon">
        <img src="${computerMove}-emoji.png" class="move-icon">
        Computer`;
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}      
   Wins:${score.wins} .Losses:${score.losses}. Ties:${score.ties}`);
}
       

function updateScoreElement(){
      document.querySelector('.js-score').innerHTML=` Wins:${score.wins} .Losses:${score.losses}. Ties:${score.ties}`;
};
        function pickComputerMove(){
        const randomNumber = Math.random();
        let computerMove = '';

        if (randomNumber < 1/3) {
            computerMove = 'Rock';
        } else if (randomNumber < 2/3) {
            computerMove = 'Paper';
        } else {
            computerMove = 'Scissors';
        }

        return computerMove;
        };