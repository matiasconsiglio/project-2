const instructions = document.querySelector('.instructions');
const scoreboard = document.querySelector('.scoreboard');
const gameplay = document.querySelector('.gameplay');
const score = document.querySelector('.score');
const button = document.getElementById('button');

let play=false;

button.addEventListener('click', tapAndPlay);

function tapAndPlay(){
    play=true;
    score.innerHTML='0';
    instructions.innerHTML='';
    //scoreboard.style.display='none';
    button.style.display='none';
}
