
const instructions = document.querySelector('.instructions'); // We call constants in java from html the ones we want to make changes on them.
const scoreboard = document.querySelector('.scoreboard');
const gamePlay = document.querySelector('.gamePlay');
const score = document.querySelector('.score');
const button = document.getElementById('button');
let circleClick = false;
let play=false;//not playing
let time = 0;
button.addEventListener('click', tapAndPlay);//used to listen when the user press the button to start the game.

function tapAndPlay(){//inmediate effect of pressing the play button, clean page for game, calls for gameStart function to start the game.
    play=true;
    score.innerHTML='0';
    instructions.innerHTML='';
    button.style.display='none';
    gameStart();
    
    
}

function randomNumber(n){//function that generates an interger random number between 0 and n.
    let random = Math.floor(Math.random()*n)
    return random;
}

let gameTimespace = {};
let points = 0;

function gameStart(){//function that calls in action de circle that the user need to press in the game, it will appear in time by a random number between 0 and 3000 miliseconds
    
    gameTimespace = setTimeout(circle, randomNumber(3000 - points*20));
    
    
}

let chance={};

function circle(){
    circleClick=false;
    let e = document.createElement('div');
    e.classList.add('circle');
    e.style.height = (125 -1.5*points)+'px';
    e.style.width = (125 -1.5*points)+'px';
    e.style.backgroundColor = 'rgb(' + points*3 + ',' + points*3 + ',' + points*3 + ')';
    e.style.left = (randomNumber((gamePlay.clientWidth)/1.5 +1 - 150) + 150) + 'px';
    e.style.top = (randomNumber((gamePlay.clientHeight)/1.5 +1 - 150) + 150) + 'px';
    e.start = new Date().getTime();
    
   
    e.addEventListener('click',tap)
    gamePlay.appendChild(e);
    
    chance = setTimeout(function (){ 
    e.style.display ='inline';
    if (circleClick === false){
        reset();
        

    }
       
    }
    ,2000 - points*20); 
    //if (circleClick = true){
       // circleClick = false;
        //return circleClick;
    //}
    
    
}



function count(points){
    return points;
}


function tap(element){
    circleClick = true;
    clearTimeout(gameTimespace);
    gamePlay.children[0].remove();
    points++
    gameTimespace = setTimeout(circle, randomNumber(3000 - points*20));
    score.innerHTML=` ${count(points)} `
     

    

}


function reset(){
    
    
    alert('heelo');
    gamePlay.children[0].remove();
    clearTimeout(gameTimespace);
    clearTimeout(chance);
    play=false;
    score.innerHTML=` ${count(points)} `;
    instructions.innerHTML='';
    button.style.display='block';
    //points = 0;
  
}
