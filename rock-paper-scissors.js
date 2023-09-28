    //JSON.parse converts to an object 
    let score = JSON.parse(localStorage.getItem('score'))||{
        wins:0,
        losses:0,
        ties:0
      };
  
      /*if (!score){//score===null
          score={
          wins:0,
          losses:0,
          ties:0
          }
       }*/
       
       updateScoreEl();      
      
      function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
      }
  
      function playGame(playerMove) {
        const computer = pickComputerMove();
  
        let result = '';
        if (playerMove == 'scissors') {
          if (computer === 'rock') {
            result = 'You lose';
          } else if (computer === 'paper') {
            result = 'You win';
          } else if (computer === 'scissors') {
            result = 'Tie';
          }
  
        } else if (playerMove == 'paper') {
          if (computer === 'rock') {
            result = 'You win';
          } else if (computer === 'paper') {
            result = 'Tie';
          } else if (computer === 'scissors') {
            result = 'You lose';
          }
  
        } else if (playerMove == 'rock') {
          if (computer === 'rock') {
            result = 'Tie';
          } else if (computer === 'paper') {
            result = 'You lose';
          } else if (computer === 'scissors') {
            result = 'You win';
          }
        }
  
        if (result === 'You win') {
          score.wins += 1;
        } else if (result === 'You lose') {
          score.losses += 1;
        } else if (result = 'Tie') {
          score.ties += 1;
        }
        //jSON.srtingify converts to a string
        localStorage.setItem('score', JSON.stringify(score));
        
        updateScoreEl();
        
        document.querySelector('.result').innerHTML=` ${result}`;
        document.querySelector('.moves').innerHTML=`You <img src="images/${playerMove}-emoji.png" class="move-icon"><img src="images/${computer}-emoji.png" class="move-icon">Computer `;
  
  
        
        //alert(`Computer pick ${computer} =>  ${result} \n Wins: ${score.wins}, Losses: ${score.losses}, Ties :${score.ties}`);
  
      }
      function updateScoreEl(){
        document.querySelector('.score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties :${score.ties}`
        
      }
  
      
  
      function pickComputerMove() {
        const randomNumber = Math.random();
        let computer = '';
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computer = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computer = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computer = 'scissors';
        }
        return computer;
      }