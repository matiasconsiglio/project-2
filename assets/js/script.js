const instructions = document.querySelector('.instructions'); // We call constants in java from html the ones we want to make changes on them.
const scoreboard = document.querySelector('.scoreboard');
const gamePlay = document.querySelector('.gamePlay');
const score = document.querySelector('.score');
const button = document.getElementById('button');

let play=false;//not playing

button.addEventListener('click', tapAndPlay);//used to listen when the user press the button to start the game.

function tapAndPlay(){//inmediate effect of pressing the play button, clean page for game, calls for gameStart function to start the game.
    play=true;
    score.innerHTML='0';
    instructions.innerHTML='';
    //scoreboard.style.display='none';
    button.style.display='none';
    gameStart();
 
}



function randomNumber(n){//function that generates an interger random number between 0 and n.
    let random = Math.floor(Math.random()*n)
    return random;
}
//let initialTime = 0;
let gameTimespace = {};
let points = 0;
function gameStart(){//function that calls in action de circle that the user need to press in the game, it will appear in time by a random number between 0 and 3000 miliseconds
    gameTimespace = setTimeout(circle, randomNumber(3000 - points*20));
    //initialTime = new Date().getTime();
}



let visibility = false;
function circle(){
    let e = document.createElement('div');
    e.classList.add('circle');
    e.style.height = (125 -1.5*points)+'px';
    e.style.width = (125 -1.5*points)+'px';
    e.style.backgroundColor = 'rgb(' + points*3 + ',' + points*3 + ',' + points*3 + ')';
    e.style.left = (randomNumber((gamePlay.clientWidth)/1.5 +1 - 150) + 150) + 'px';
    e.style.top = (randomNumber((gamePlay.clientHeight)/1.5 +1 - 150) + 150) + 'px';
    e.start = new Date().getTime();
    
    e.addEventListener('click',tap);
    
    gamePlay.appendChild(e);
    visibility = true;
    setTimeout(function(){ //using setTimeout function
    e.style.display ='inline'; //displaying the button again after 3000ms or 3 seconds
    }
    ,2000 - points*20); 
    visibility = false;
   // if(initialTime>(2000 - points*20)){
      //  reset();
    //}
    newgame();
}

function count(points){
    return points;
}

function newgame(){
    let start = element.target.start;
    let finish = new Date().getTime();
    let duration = (finish - start);
    let allowDuration = (2 - points*25);
    if(duration > allowDuration){
        gamePlay.children[0].remove();
        reset();
    } else(null)
}

function tap(element){
    let start = element.target.start;
    let finish = new Date().getTime();
    let duration = (finish - start);
    let allowDuration = (2000 - points*25);
    clearTimeout(gameTimespace);
    if( duration <=allowDuration ){
        gamePlay.children[0].remove();
        points++
        gameTimespace = setTimeout(circle, randomNumber(3000 - points*20));
        score.innerHTML=` ${count(points)} `
    } 
}

function reset(){
    alert('heelo');
    clearTimeout(gameTimespace);
    play=false;
    score.innerHTML=` ${count(points)} `;
    instructions.innerHTML='';
    button.style.display='block';
    //points = 0;

}