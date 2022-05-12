
const instructions = document.querySelector('.instructions'); // We call constants in java from html the ones we want to make changes on them.
const scoreboard = document.querySelector('.scoreboard');
const gamePlay = document.querySelector('.gamePlay');
const score = document.querySelector('.score');
const button = document.getElementById('button');
let circleClick;
let time = 0;
button.addEventListener('click', tapAndPlay);//used to listen when the user press the button to start the game.

function tapAndPlay(){//inmediate effect of pressing the play button, clean page for game, calls for gameStart function to start the game.
    score.innerHTML='0';
    instructions.innerHTML='';
    button.style.display='none';
    gameStart();
    points=0;
    
    
}

function randomNumber(n){//function that generates an interger random number between 0 and n.
    let random = Math.floor(Math.random()*n)
    return random;
}

let gameTimespace = {};
let points = 0;

function gameStart(){//function that calls in action de circle that the user need to press in the game, it will appear in time by a random number between 0 and 3000 miliseconds
    
    gameTimespace = setTimeout(circle, randomNumber(2000 - points*15));
    circleClick = false;
    
}

let chance={};

function circle(){
    
    let e = document.createElement('div');
    e.classList.add('circle');
    e.style.height = (125 -1.24*points)+'px';
    e.style.width = (125 -1.24*points)+'px';
    e.style.backgroundColor = 'rgb(' + (20 +points*2) + ',' + (20 + points*2) + ',' + (20 + points*2) + ')';
    e.style.left = (randomNumber((gamePlay.clientWidth) +1 - 110)) + 'px';
    e.style.top = (randomNumber((gamePlay.clientHeight) +1 - 250)) + 'px';
    e.start = new Date().getTime();
    gamePlay.appendChild(e);

    e.addEventListener('click',tap)
    
    circleClick = false;
    chance = setTimeout(function (){ 
    e.style.display ='inline';
    if (circleClick === false){
        reset();}   
    }
    ,1500 - points*14); 
    //if (circleClick = true){
       // ;
        //return circleClick;
    //}
    
    
}


function count(points){
    return points;
}

function tap(){
    circleClick = true;
    clearTimeout(gameTimespace);
    clearTimeout(chance);
    gamePlay.children[0].remove();
    points++
    gameTimespace = setTimeout(circle, randomNumber(2000 - points*15));
    score.innerHTML=` ${count(points)} `

}

function reset(){

    gamePlay.children[0].remove();
    clearTimeout(gameTimespace);
    clearTimeout(chance);
    score.innerHTML='';
    instructions.innerHTML=`You Lost... Your Score: ${count(points)} `;
    button.style.display='block';
    //points = 0;` ${count(points)} `
  
}
