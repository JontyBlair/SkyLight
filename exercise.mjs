import { updateUser } from './retrieveData.mjs';


let star = {};

let userData = await updateUser;
let arrayUserData = JSON.parse(userData[0].jsondata);
let activityIndex = localStorage.getItem('Index');

start();

function start() {
    let level = document.createElement("div");
    level.setAttribute('class', 'level2');

    let headerDiv = document.createElement("div");
    headerDiv.setAttribute('class', 'headerDiv');

    let timerDiv = document.createElement("div");
    timerDiv.setAttribute('class', 'timer');
    timerDiv.setAttribute('id', 'timer');

    timerDiv.innerHTML = "0:10";

    let footerDiv = document.createElement("div");
    footerDiv.setAttribute('class', 'footerDiv');

    let startButton = document.createElement("button");
    startButton.innerHTML = "Start";
    startButton.setAttribute('class', 'startButton');
    startButton.setAttribute('id', 'startTimer');

    let starRating = document.createElement("div");
    starRating.setAttribute('class', 'starRating');

    for (let i = 0; i < 5; i++) {
        star[i] = document.createElement("span");
        star[i].setAttribute('class', 'fa fa-star star grey');
        star[i].setAttribute('id', 'star-' + [i]);
        starRating.appendChild(star[i]);
    }

    let stopButton = document.createElement("button");
    stopButton.innerHTML = "Finish";
    stopButton.setAttribute('class', 'stopButton');
    stopButton.setAttribute('id', 'stopTimer');

    headerDiv.innerHTML = arrayUserData.exercise[activityIndex];

    console.log(arrayUserData);

    headerDiv.appendChild(timerDiv);

    footerDiv.appendChild(startButton);
    footerDiv.appendChild(starRating);
    footerDiv.appendChild(stopButton);
    
    level.appendChild(headerDiv);
    level.appendChild(footerDiv);

    document.body.appendChild(level);
    buttonsInit();
}