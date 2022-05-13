/**
* Declare constants in Java from Html the ones the code wants to make changes on them. 
*/
const instructions = document.querySelector('.instructions'); //
const scoreboard = document.querySelector('.scoreboard');
const gamePlay = document.querySelector('.gamePlay');
const score = document.querySelector('.score');
const button = document.getElementById('button');

/**
* Declare global variables for allowing the game to interact with html and css. 
*/
let circleClick; //Create new global variables.
let time=0;
let points=0;
let chance={};
let gameTimespace={};

/**
* Add event listener to both start game buttons.
*/
button.addEventListener('click', tapAndPlay);//Create listeners for starting the game.
buttonHard.addEventListener('click', tapAndPlayHard);

/**
* Function that calls the start of the game for normal difficulty. Clear out page for game initiation after selecting difficulty button.
* Calls function gameStart()
* @param {number} points - Number of points.
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
* @param {number} points - Number of points.
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
* @argument {number} n - Integer number that represents maximum time in milliseconds.
* @returns {number} n - Integer number that represents maximum time in milliseconds.
*/
function randomNumber(n){
    let random = Math.floor(Math.random()*n);
    return random;
}

/**
* Function for starting a normal game that calls the circle function and randomNumber function that generates a time where circle function will be activated.
* @argument {function, function} circle, randomNumber - circle function and randomNumber function.
* @param {boolean} circleClick - Boolean that represents either the circle in the game has been pressed, declaring it to be false.
*/
function gameStart(){
    gameTimespace = setTimeout(circle, randomNumber(2000 - points*15));
    circleClick = false; 
}

/**
* Function for starting a Hard game that calls the circleHard function and randomNumber function that generates a time where the circle function will be activated.
* @argument {function, function} circleHard, randomNumber - circle function and randomNumber function.
* @param {boolean} circleClick - Boolean that represents either the circle in the game has been pressed, declaring it to be false.
*/
function gameStartHard(){
    gameTimespace = setTimeout(circleHard, randomNumber(1500 - points*16));
    circleClick = false; 
}

/**
* Function circle that generates the circle the user needs to tap to continue playing, failing to tap it will cause the user to lose the game.
* @param {element} e - Div created inside area game Div and after appended to it. This Div contains the circle and this function gives styles, conditions for the game, size, color, random position and duration before the circle disappears.
* @listens click - calls tap function, if user tap circleClick = true, if not false.
* @param {boolean} circleClick - Boolean that represents either the circle in the game has been pressed.
* @param {function} chance - declares time that circle will be available for user to tap it, after that time circle disappears if user doesn't manage to click it via tap function declaring circleClick true so the game continues, this function calls reset function that restarts game.
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
    e.addEventListener('click',tap)
    circleClick = false;
    chance = setTimeout(
        function (){ 
            e.style.display ='inline'; 
            if (circleClick === false){
            reset();}   
            }
        ,1000 - points*8); 
}

/**
* Function circleHard that generates the circle the user needs to tap to continue playing, failing to tap it will cause the user to lose the game.
* @param {element} e - Div created inside area game Div and after appended to it. This Div contains the circle and this function gives styles, conditions for the game, size, color, random position and duration before the circle disappears.
* @listens click - calls tapHard function, if user tap circleClick = true, if not false.
* @param {boolean} circleClick - Boolean that represents either the circle in the game has been pressed.
* @param {function} chance - declares time that circle will be available for user to tap it, after that time circle disappears if user doesn't manage to click it via tap function declaring circleClick true so the game continues, this function calls reset function that restarts game.
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
    e.addEventListener('click',tapHard)
    circleClick = false;
    chance = setTimeout(
        function (){
             e.style.display ='inline'; 
            if (circleClick === false){
            reset();}   
            }
        ,800 - points*9); 
}

/**
* Function Tap, if the user clicks or taps the circle in normal difficulty then this function is called, add one point to score, clearoutTimeout for gameTimespace and chance, restart the generation of a new circle for the user to tap.
* @param {boolean} circleClick -  define it to true. user tap de circle.
* @param {text} score.innerHTML - update points count.
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
* @param {boolean} circleClick -  define it to true. user tap de circle.
* @param {text} score.innerHTML - update points count.
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
*  @param {text} score.innerHTML - update points count to empty.
*  @param {text} score.innerHTML - let know the user lost the game and shows the total score.
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
