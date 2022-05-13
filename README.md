# TaPlay

TaPlay is a tap game designed with 2 levels of difficulty to choose by, normal game and hard game. After choosing the desire initial difficulty the game starts. It will pop up a circle in a random location in the game area of the screen that the user needs to tap to continue the game and score points. As an add on the game also has an engine that makes the game harder by the more points the user scores, thanks to this in both difficulties the user will meet up with 4 different features:

- Random time for the initial circle to appear, also randome time between new circles, both getting a smaller gap in time.
- Size of the circles getting smaller.
- Circles getting lighter in color.
- Smaller gap of time the user will have to tap the circles.

![Game Screen](/assets/readme-images/GameScreen.png)

## Features

### Existing Features

Responsive on all device sizes and has interactive elements.

- Header

    - Includes the logo "TaPlay" and a small pointer icon that makes relation between the game name, "tapping" and the game intentions.
    - The header appears before and while playing the game.

![Header](/assets/readme-images/Header.png)
- Instructions

    - Explain to the user in what the game consist, how to play and what to expect.
    - The instructions dissapears once the game has started.

![Instructions](/assets/readme-images/Instructions.png)
- Game Area

    - Space where the game happens, before starting the game this area is partly covered by the instructions. First image as follows.
    - Once the game starts the circles will appear in a random position in this area for the user to play. Second image shows how it looks the first circle that appears when choosing normal difficulty. Third image shows how it looks the first circle when choosing hard difficulty.
    - Once the user lose this area will be covered with a message for the user and the total score as shown in the fourth image as folllow.
    - This Area is responsive to the device, the bigger the screen in width and/or height, the bigger the Game Area.
    - While playing in the bottom of the screen the user is able to see the current score.

![Gaming Area before playing](/assets/readme-images/GameArea1.png)
![Gaming Area while playing in normal](/assets/readme-images/GameArea2.png)
![Gaming Area while playing in Hard](/assets/readme-images/GameArea3.png)
![Gaming Area after the game](/assets/readme-images/GameArea4.png)
- After Game Area

    - This section shows the user the result of the game and the score obtained.
    - The user can choose to play another game, either with normal or hard difficulty.

![After Game Area](/assets/readme-images/AfterGame.png)

- Results 

    - In this area the user will receive a message showing the game results including the total score.

![Results](/assets/readme-images/Results.png)

- Footer 

    - Before starting playing this area will show the two options of game the user has to choose by.
    - While playing this area will show the actual score of the player.
    - After the game this area will show both buttons with different difficulty for the user to start a new game.

![Footer before and after game](/assets/readme-images/Footer1.png)
![Footer while playing](/assets/readme-images/Footer2.png)
## Features Left to Implement

- Creation of a Scoreboard that saves the best 10 scores and usernames of different player. 

## User Experience (UX)

### User stories as first time visitor goals

- As a First Time Visitor, I want to easily understand the main purpose of the site and learn in what the game consist.
- As a First Time Visitor, I want to be able to navigate throughout the site in an easy way and be able to understand the content and be able to play the game in a smooth way.
- As a First Time Visitor, I want to be able to know my score while and after playing.

### Testing User Stories from User Experience (UX) Section

- As a First Time Visitor, I want to easily understand the main purpose of the site and learn in what the game consist.

    - Users are greeted with the logo and an image that gives a first aproximation of the page/game. 
    - Second to see is the instructions explained with a motivational message that encourage the user to understand the game and play.
    Lastly, the users have the option of wich difficulty of game they want to play and then starting the game by pressing the choosen button.

- As a First Time Visitor, I want to be able to navigate throughout the site in an easy way and be able to understand the content and be able to play the game in a smooth way.

    - As simple as it gets, thanks to the instructions and the buttons to choose the difficluty of the game, the user can be playing straight away after entering the site. Also the gaming area and the game can be played easily with the information that the site gives plus the score counting feature.

- As a First Time Visitor, I want to be able to know my score while and after playing.

    - The site shows the score of the user while the game is on and also after the game is over.

## Testing

- I tested this game in different browsers: Firefox, Chrome, Safari.
- I confirmed the game results are always as expected.
- I confirm that all the features expressed works as they should.
- I confirmed that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in devtools.

- HTML

    - No errors were returned when passing through the official W3C validator.

![HTML Validator](/assets/readme-images/HtmlValidator.png)
- CSS

    - No errors were returned when passing through the official W3C validator.

![CSS Validator](/assets/readme-images/CssValidator.png)
- JavaScript

    - No errors were returned when passing through the JSHint JavaScript validator.

![Java Validator](/assets/readme-images/JavaValidator.png)
- Web Developer Tool -  Lighthouse 

    - 100% Accessibility.

![Accessibility Lighthouse](/assets/readme-images/LightHouse.png)
### Different View by Device

- Web

![Web View](/assets/readme-images/WebView.png)
- Ipad mini

![Tablet View](/assets/readme-images/GameScreen.png)
- Iphone 12 max

![Smartphone View](/assets/readme-images/SmartphoneView.png)
### Unfixed Bugs

- Both in normal and hard game reaching a high score its really difficult, probability of loosing is really high thanks to the features that makes the game more difficult as the score of the player goes up. In normal difficulty the user will need to score more than 100 points to make the game stop and in hard around 70 points, with stop it means that the circles after that quantity of points will dissapear. In both scenarios the game needs a solution; stopping the game 1 point before and give the user a congratulations message saying they have won the game. This wasn't implemented since its almost imposible to reach to this point.

## Deployment

- The site was deployed to GitHub pages.

    - In the GitHub repository, navigate to the Settings tab.
    - From the source section drop-down menu, select the Master Branch.
    - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://matiasconsiglio.github.io/project-2/

## Credits

### Code

- The student used the following open-source game as a guide: https://js-beginners.github.io/click-shapes-javascript-game/ with the code information in the following link: https://github.com/JS-Beginners/click-shapes-javascript-game
- This code helped the student to understand the engine needed for a Tap/click game.
- The student came up with his own workflow, structure and rules for the game keeping the basic engine. 

### Media

- The only icon used was taken free from https://icons8.com.

