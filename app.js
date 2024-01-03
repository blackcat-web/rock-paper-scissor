// required HTML elements
const Score = document.querySelector('.score-num');
const movesBox = document.querySelector('.moves-sec');
const WinShowBox = document.querySelector('.win-show-move-box');

const cpuWin = document.getElementById('cpu-win');
const UserWin = document.getElementById('user-win');
const cpuImage = document.getElementById('cpu-win-img');
const userImage = document.getElementById('user-win-img');
const messageBox = document.getElementById('winMsg');

// Some values for the Game
const movesArray = ['R', 'P', 'S'];
const showArray = ["./images/icon-rock.svg",
                    "./images/icon-paper.svg" ,
                    "./images/icon-scissors.svg" ];
const styleClasses = ['rock', 'paper', 'scissor', 'winner'];
const Messages = ['you lose', 'you win', 'both tie'];
let computerMove, userMove, random, win = 0, temp;

// Game executing function.
function addMoves(num){
    temp = num;
    userMove = movesArray[num];
    // Generating a random Move
    random = Math.floor(Math.random() * 2);
    computerMove = movesArray[random];
    // check and returning boolean value for Game execution
    if(computerMove == 'S' && userMove == 'P'){
        win--;
        cpuWin.classList.add(styleClasses[3]);
        messageBox.innerText = Messages[0];
    }
    else if (computerMove == 'S' && userMove == 'R'){
        win++;
        UserWin.classList.add(styleClasses[3]);
        messageBox.innerText = Messages[1];
    }
    else if(computerMove == 'P' && userMove== 'S'){
        win++;
        UserWin.classList.add(styleClasses[3]);
        messageBox.innerText = Messages[1];
    }
    else if(computerMove == 'P' && userMove == 'R' ){
        win--;
        cpuWin.classList.add(styleClasses[3]);
        messageBox.innerText = Messages[0];
    }
    else if(computerMove == 'R' && userMove== 'P'){
        win++;
        UserWin.classList.add(styleClasses[3]);
        messageBox.innerText = Messages[1];
    }
    else if(computerMove == 'R' && userMove == 'S' ){
        win--;
        cpuWin.classList.add(styleClasses[3]);
        messageBox.innerText = Messages[0];
    }
    else if (computerMove == userMove){
        win;
        messageBox.innerText = Messages[2];
    }
    else{
        console.error("Invalid input");
    }
    // updating score
    Score.innerText = win;
    // updating winner Show-case
    cpuImage.setAttribute('src', showArray[random]);
    cpuWin.classList.add(styleClasses[random]);
    userImage.setAttribute('src', showArray[num]);
    UserWin.classList.add(styleClasses[num]);
    // Hiding the user move section and showing the winner section
    movesBox.style = 'display: none';
    WinShowBox.style = 'display: flex';
}
// Play again Button functionality
document.getElementById('playBtn').addEventListener('click', ()=>{
    movesBox.style = 'display: block';
    WinShowBox.style = 'display: none';
    UserWin.classList.remove(styleClasses[temp]);
    cpuWin.classList.remove(styleClasses[random]);
    cpuWin.classList.remove(styleClasses[3]);
    UserWin.classList.remove(styleClasses[3]);

});
// making the rule box responsive for Desktop and Mobile
const rulesBox = document.getElementById('rule-box');
document.getElementById('show-rules').addEventListener('click',()=>{
    if(window.innerWidth <= 780){
        rulesBox.style = 'display: flex;';
    }
    else{
        rulesBox.style = 'display: block;'; 
    }
});