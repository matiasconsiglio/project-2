/**
* Declare constants in Java from Html the ones the code wants to make changes on them. 
*/
const instructions = document.querySelector('.instructions'); 
const gamePlay = document.querySelector('.gamePlay');
const score = document.querySelector('.score');
const button = document.getElementById('button');
const buttonHard = document.getElementById('buttonHard');

/**
* Declare global variables for allowing the game to interact with html and css. 
*/
let circleClick; //Create new global variables.
let points=0;
let chance={};
let gameTimespace={};

/**
* Add event listener to both start game buttons.
*/
button.addEventListener('click', tapAndPlay);
buttonHard.addEventListener('click', tapAndPlayHard);

/**
* Function that calls the start of the game for normal difficulty. Clear out page for game initiation after selecting difficulty button.
* Calls function gameStart()
*/
function tapAndPlay(){
    score.innerHTML='0';
    instructions.innerHTML='';
    button.style.display='none';
    buttonHard.style.display='none';
    gameStart();
    points=0; 
}

/**
* Function that calls the start of the game for Hard difficulty. Clear out page for game initiation after selecting difficulty button.
* Calls function gameStartHard()
*/
function tapAndPlayHard(){
    score.innerHTML='0';
    instructions.innerHTML='';
    button.style.display='none';
    buttonHard.style.display='none';
    gameStartHard();
    points=0; 
}

/**
* Function that generate an integer random number between 0 and n.
* @param {number} n - Integer number that represents maximum time in milliseconds.
* @returns {number} n - Integer number that represents maximum time in milliseconds.
*/
function randomNumber(n){
    let random = Math.floor(Math.random()*n);
    return random;
}

/**
* Function for starting a normal game that calls the circle function and randomNumber function that generates a time where circle function will be activated.
*/
function gameStart(){
    gameTimespace = setTimeout(circle, randomNumber(2000 - points*15));
    circleClick = false; 
}

/**
* Function for starting a Hard game that calls the circleHard function and randomNumber function that generates a time where the circle function will be activated.
*/
function gameStartHard(){
    gameTimespace = setTimeout(circleHard, randomNumber(1500 - points*16));
    circleClick = false; 
}

/**
* Function circle that generates the circle the user needs to tap to continue playing, failing to tap it will cause the user to lose the game.
*/
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
    e.addEventListener('click',tap);
    circleClick = false;
    chance = setTimeout(
        function (){ 
            e.style.display ='inline'; 
            if (circleClick === false){
            reset();
            }   
        }, 1000 - points*8); 
}

/**
* Function circleHard that generates the circle the user needs to tap to continue playing, failing to tap it will cause the user to lose the game.
*/
function circleHard(){
    let e = document.createElement('div');
    e.classList.add('circle');
    e.style.height = (100 -1.3*points)+'px';
    e.style.width = (100 -1.3*points)+'px';
    e.style.backgroundColor = 'rgb(' + (20 + points*3) + ',' + (20 + points*3) + ',' + (255) + ')';
    e.style.left = (randomNumber((gamePlay.clientWidth) +1 - 110)) + 'px';
    e.style.top = (randomNumber((gamePlay.clientHeight) +1 - 250)) + 'px';
    e.start = new Date().getTime();
    gamePlay.appendChild(e);
    e.addEventListener('click',tapHard);
    circleClick = false;
    chance = setTimeout(
        function (){
             e.style.display ='inline'; 
                if (circleClick === false){
                reset();
                }
        }, 800 - points*9); 
}

/**
* Function Tap, if the user clicks or taps the circle in normal difficulty then this function is called, add one point to score, clearoutTimeout for gameTimespace and chance, restart the generation of a new circle for the user to tap.
*/
function tap(){
    circleClick = true;
    clearTimeout(gameTimespace);
    clearTimeout(chance);
    gamePlay.children[0].remove();
    points++;
    gameTimespace = setTimeout(circle, randomNumber(2000 - points*16));
    score.innerHTML=` ${count(points)} `;
}

/**
* Function TapHard, if the user clicks or taps the circle in Hard difficulty then this function is called, add one point to score, clearoutTimeout for gameTimespace and chance, restart the generation of a new circle for the user to tap.
*/
function tapHard(){
    circleClick = true;
    clearTimeout(gameTimespace);
    clearTimeout(chance);
    gamePlay.children[0].remove();
    points++;
    gameTimespace = setTimeout(circleHard, randomNumber(1500 - points*12));
    score.innerHTML=` ${count(points)} `;
}

/**
* Counts the number of point
* @param {number} points - Number of points.
* @return {number} points - Number of points.
*/
function count(points){
    return points;
}

/**
* Function reset if the user fails to tap a circle in either difficuly, this function will be called, claering out the circle from the game area, clearing all settimeout values, showing the final score then it resets the count and brings back the start buttons.
*/
function reset(){
    gamePlay.children[0].remove();
    clearTimeout(gameTimespace);
    clearTimeout(chance);
    score.innerHTML='';
    instructions.innerHTML=`You Lost... Your Score: ${count(points)} `;
    button.style.display='block';
    buttonHard.style.display='block';
}
