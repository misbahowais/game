/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1 or a two consecutive six, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach points as specified by the user on GLOBAL score wins the game
*/
var scores, roundScores, activePlayer, gameInProgress, count = 0, change, x;
init();

//https://developer.mozilla.org/en-US/docs/Web/Events

document.querySelector('.btn-roll').addEventListener('click' , function() {
    if(gameInProgress) {
            //this is called anonymous funtion
        //random num
        dice = Math.floor((Math.random() * 6) + 1);
        dice === 6 ? count +=1 : count = 0;
    //display result
   
        document.querySelector('.dice').src = 'dice-' + dice + '.png';
    
        document.querySelector('.dice').style.display = 'block';
    
    //update roundScore and scores
    
        if (dice === 1 || count === 2 )  {
            //next player
            update();
        } else {
            //add score
       
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if(gameInProgress) {
        //update scores
        
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
        //winner  update
    
        if (scores[activePlayer] >= x) {
        
            document.querySelector('#name-' + activePlayer).textContent = 'winner!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gameInProgress = false;
        } else {
            update();
        }
    }
});

function update() {
    
    count = 0;
    document.getElementById('current-0').textContent = roundScore = 0;
    document.getElementById('current-1').textContent = 0;
        
    activePlayer ===1 ? activePlayer = 0 : activePlayer = 1;
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2'
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    gameInProgress = true;
    
    if(gameInProgress) {
        
            
        document.querySelector('.win-score').style.display = 'block';
        document.querySelector('.save').style.display = 'block';
        document.querySelector('.final-score').placeholder = 'Final Score';
    
}
}

document.querySelector('.win-score').addEventListener('click', function() {
    document.querySelector('.win-score').style.display = 'none';
    
    document.querySelector('.final-score').style.display = 'block';
});

document.querySelector('.save').addEventListener('click', function() {
     x = document.querySelector('.final-score').value;
     
     if(x) {
            
        } else {
            x = 100;
        }
    
    document.querySelector('.final-score').style.display = 'none';
    
     document.querySelector('.save').style.display = 'none';
});
/*
function btn() {
    //function call back
}
btn();

document.querySelectore('.btn-roll').addEventListner('click' , btn);
*/
//dice = Math.floor((Math.random() * 6) + 1);
//document.querySelector('#current-' + activePlayer).textContent = dice;

//alert(x);

//to change css property
//            <img src="dice-5.png" alt="Dice" class="dice" id="dice-2">

